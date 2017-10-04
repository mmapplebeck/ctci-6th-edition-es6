export class MultiStack {
  constructor(stackCount) {
    this.stackCount = stackCount
    this.data = []
    this.indeces = []
  }
  validIndex(id) {
    return this.indeces[id] !== undefined && this.indeces[id] !== null
  }
  push(id, data) {
    if (id >= this.stackCount) return
    let index = this.validIndex(id) ? id + this.stackCount : id
    this.indeces[id] = index
    this.data[index] = data
  }
  pop(id) {
    if (!this.validIndex(id)) return null
    let index = this.indeces[id]
    let data = this.data[index]
    this.indeces[id] = index === id ? null : index - this.stackCount
    return data
  }
  peek(id) {
    if (!this.validIndex(id)) return null
    return this.data[this.indeces[id]]
  }
  isEmpty(id) {
    return this.validIndex(id) ? false : true
  }
}