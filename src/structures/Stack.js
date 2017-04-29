export class StackNode {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

export default class Stack {
  constructor() {
    this.top = null
  }
  push(data) {
    let node = new StackNode(data)
    node.next = this.top
    this.top = node
  }
  pop() {
    if (this.top === null) return null
    let data = this.top.data
    this.top = this.top.next
    return data
  }
  peek() {
    return this.top === null ? null : this.top.data
  }
  isEmpty() {
    return this.top === null
  }
}