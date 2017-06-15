import expect from 'expect'
import Graph, {Node} from './Graph'

describe('Graph', () => {

  it('should return an object with an empty nodes array', () => {
    const graph = new Graph()
    expect(graph.nodes).toBeA(Array)
    expect(graph.nodes.length).toEqual(0)
  })
})

describe('Node', () => {
  it('should set a name and an empty children array', () => {
    const node = new Node('name')
    expect(node.name).toEqual('name')
    expect(node.children).toBeA(Array)
    expect(node.children.length).toEqual(0)
  })
})