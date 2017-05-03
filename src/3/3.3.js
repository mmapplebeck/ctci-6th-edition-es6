import Stack from '../structures/Stack'

export class StackWithSize extends Stack {
  constructor(maxSize = 10) {
    super()
    this.size = 0
    this.maxSize = maxSize
  }
  push(data) {
    if (this.full()) return null
    this.size += 1
    super.push(data)
  }
  pop() {
    if (!this.isEmpty()) this.size -= 1
    return super.pop()
  }
  full() {
    return this.size === this.maxSize
  }
}

export class SetOfStacks {
  constructor(maxStackSize = 10) {
    this.maxStackSize = maxStackSize
    this.activeStack = new StackWithSize(maxStackSize)
    this.stacks = [this.activeStack]
  }
  push(data) {
    if (this.activeStack.full()) {
      const stack = new StackWithSize(this.maxStackSize)
      this.activeStack = stack
      this.stacks.push(stack)
    }
    this.activeStack.push(data)
  }
  pop() {
    if (this.activeStack.isEmpty() && this.stacks.length > 1) {
      this.stacks.pop()
      this.activeStack = this.stacks[this.stacks.length - 1]
    }
    return this.activeStack.pop()
  }
  peek() {
    return this.activeStack.peek()
  }
  isEmpty() {
    return this.activeStack.isEmpty()
  }
}