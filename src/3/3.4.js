import Stack from '../structures/Stack'

export default class MyQueue {
  constructor() {
    this.stackOldest = new Stack()
    this.stackNewest = new Stack()
  }
  add(data) {
    this.stackNewest.push(data)
  }
  shiftStacks() {
    if (this.stackOldest.isEmpty()) {
      while (!this.stackNewest.isEmpty()) {
        this.stackOldest.push(this.stackNewest.pop())  
      }
    }
  }
  remove() {
    this.shiftStacks()
    return this.stackOldest.pop()
  }
  peek() {
    this.shiftStacks()
    return this.stackOldest.peek()
  }
}