export class StackNodeWithMin {
  constructor(data, min) {
    this.data = data
    this.next = null
    this.min = min
  }
}
export class StackWithMin {
  constructor() {
    this.top = null
  }
  push(data) {
    const min = this.top === null || data < this.top.min ? data : this.top.min
    let node = new StackNodeWithMin(data, min)
    node.next = this.top
    this.top = node
  }
  pop() {
    if (this.top === null) return null
    const data = this.top.data
    this.top = this.top.next
    return data
  }
  min() {
    return this.top === null ? null : this.top.min
  }
  peek() {
    this.top === null ? null : this.top.data
  }
  isEmpty() {
    return this.top === null
  }
}