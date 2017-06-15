export class Node {
  constructor(name) {
    this.name = name
    this.children = []
  }
}

export default class Graph {
  constructor() {
    this.nodes = []
  }
}