import Graph, {Node as GraphNode} from '../structures/Graph'

export class ProjectGraph extends Graph {
  constructor() {
    super()
    this.map = {}
  }
  addProject(name) {
    if (!this.map[name]) {
      let project = new Project(name)
      this.map[name] = project
      this.nodes.push(project)
    }
  }
  addEdge(dependencyName, projectName) {
    this.map[dependencyName].addChild(this.map[projectName])
  }
}

export class Project extends GraphNode {
  constructor(name) {
    super(name)
    this.map = {}
    this.dependencyCount = 0
  }
  addChild(project) {
    if (!this.map[project.name]) {
      this.children.push(project)
      this.map[project.name] = project
      project.dependencyCount += 1
    }
  }
}

export const buildGraph = (projectNames, dependencies) => {
  let graph = new ProjectGraph()
  projectNames.forEach(projectName => {
    graph.addProject(projectName)
  })
  dependencies.forEach(set => {
    graph.addEdge(set[0], set[1])
  })

  return graph
}

export const orderProjects = projects => {
  let order = addNonDependent([], projects)
  let processedCount = 0

  while (processedCount < order.length) {
    let current = order[processedCount]
    if (!current) return null
    current.children.forEach(child => {
      child.dependencyCount -= 1
    })
    order = addNonDependent(order, current.children)
    processedCount += 1
  }

  return order
}

export const addNonDependent = (order, projects) => {
  projects
    .filter(project => project.dependencyCount === 0)
    .map(project => order.push(project))
  return order
}

export const findBuildOrder = (projectNames, dependencies) => {
  const graph = buildGraph(projectNames, dependencies)
  return orderProjects(graph.nodes).map(project => project.name)
}