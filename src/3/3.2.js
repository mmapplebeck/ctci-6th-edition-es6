import Stack from '../structures/Stack'

export class StackWithMin extends Stack {
  constructor() {
    super()
    this.mins = new Stack()
  }
  push(data) {
    if (this.mins.isEmpty() || data <= this.mins.peek()) this.mins.push(data)
    super.push(data)
  }
  pop(data) {
    if (this.peek() === this.mins.peek()) this.mins.pop()
    return super.pop()
  }
  peek() {
    return super.peek()
  }
  isEmpty() {
    return super.isEmpty()
  }
  min() {
    return this.mins.peek()
  }
}