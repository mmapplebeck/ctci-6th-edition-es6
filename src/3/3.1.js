import {fill} from 'lodash'

export class FixedSizeMultiStack {
  constructor(stackCount = 3, stackSize = 10) {
    this.stackCount = stackCount
    this.stackSize = stackSize
    this.positions = fill(Array(stackCount), 0)
    this.data = fill(Array(stackCount * stackSize), null)
  }
  getPosition(stackId) {
    const position = this.positions[stackId]
    if (position === undefined) {
      throw `stackId must be between 0 and ${this.stackCount - 1}`
      return null
    }
    return position
  }
  checkFull(stackId) {
    return this.positions[stackId] === this.stackSize
  }
  checkEmpty(stackId) {
    return this.positions[stackId] === 0
  }
  push(stackId, data) {
    const position = this.getPosition(stackId)
    if (position === null) return
    if (this.checkFull(stackId)) {
      throw `stack ${stackId} is full, push failed`
      return
    }
    this.data[position * (stackId + 1)] = data
    this.positions[stackId] += 1
  }
  pop(stackId) {
    const position = this.getPosition(stackId)
    if (position == null) return null
    if (this.checkEmpty(stackId)) {
      throw `stack ${stackId} is empty, pop failed`
      return null
    }
    const data = this.data[(position - 1) * (stackId + 1)]
    this.data[position - 1] = null
    this.positions[stackId] -= 1
    return data
  }
  peek(stackId) {
    const position = this.getPosition(stackId)
    if (position === null || this.checkEmpty(stackId)) return null
    return this.data[position - 1]
  }
  isEmpty(stackId) {
    if (this.getPosition(stackId) === null) return null
    return this.checkEmpty(stackId)
  }
}