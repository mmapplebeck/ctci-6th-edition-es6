import Stack from '../structures/Stack'

export class StackWithMin extends Stack {
  constructor() {
    super()
    this.minStack = new Stack()
  }
  push(data) {
    const min = this.min()
    if (min === null || data < min) this.minStack.push(data)
    super.push(data)
  }
  pop() {
    if (this.top === null) return null
    if (this.top.data === this.min()) return this.minStack.pop()
    return super.pop()
  }
  min() {
    if (this.minStack.isEmpty()) return null
    return this.minStack.peek()
  }
}