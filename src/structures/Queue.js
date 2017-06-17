export class QueueNode {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

export default class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }
  add(data) {
    let item = new QueueNode(data)
    if (this.last !== null) {
      this.last.next = item
    }
    this.last = item
    if (this.first === null) {
      this.first = this.last
    }
    this.size += 1
  }
  remove() {
    if (this.first === null) return null
    let item = this.first
    this.first = this.first.next
    if (this.first === null) {
      this.last = null
    }
    this.size -= 1
    return item.data
  }
  peek() {
    return this.first === null ? null : this.first.data
  }
  isEmpty() {
    return this.first === null
  }
}