import Stack from '../structures/Stack'
import {pullAt} from 'lodash'

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
  popBottom() {
    if (this.isEmpty()) return null
    if (this.top.next === null) return this.pop()
    this.size -= 1
    let node = this.top
    while (node.next !== null && node.next.next !== null) {
      node = node.next
    }
    const bottom = node.next.data
    node.next = null
    return bottom
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
  popAt(index) {
    if (!this.stacks[index]) return null
    return this.leftShift(index, true)
  }
  leftShift(index, removeTop) {
    const stack = this.stacks[index]
    let removedItem
    if (removeTop) removedItem = stack.pop()
    else removedItem = stack.popBottom()
    if (stack.isEmpty()) {
      pullAt(this.stacks, index)
    } else if (this.stacks.length > index + 1) {
      stack.push(this.leftShift(index + 1, false))
    }
    return removedItem
  }
  peek() {
    return this.activeStack.peek()
  }
  isEmpty() {
    return this.activeStack.isEmpty()
  }
}