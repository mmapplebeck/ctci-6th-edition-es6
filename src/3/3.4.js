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
    console.log('shift stacks')
    if (this.stackOldest.isEmpty()) {
      console.log('if')
      while (!this.stackNewest.isEmpty()) {
        console.log('not empty')
        this.stackOldest.push(this.stackNewest.pop())  
        console.log('stackOldest', this.stackOldest)
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