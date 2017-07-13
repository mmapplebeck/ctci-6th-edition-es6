import Queue from '../structures/Queue'

export default class BinaryTreeNode {
  constructor(data) {
    this.data = data
    this.size = 1
    this.left = null
    this.right = null
  }

  insert(data) {
    if (data <= this.data) {
      if (this.left) {
        this.left.insert(data)
      } else {
        this.left = new BinaryTreeNode(data)
      }
    } else if (this.right) {
      this.right.insert(data)
    } else {
      this.right = new BinaryTreeNode(data)
    }
    this.size += 1
  }

  find(data) {
    if (data === this.data) return this
    if (this.left) {
      return this.left.find(data)
    } else if (this.right) {
      return this.right.find(data)
    }
    return null
  }

  _getRandomIndex() {
    return Math.floor(Math.random() * this.size)
  }

  getRandom() {
    let leftSize = this.left ? this.left.size : 0
    let randomIndex = this._getRandomIndex()
    if (randomIndex < leftSize) return this.left.getRandom()
    if (randomIndex === leftSize) return this
    return this.right.getRandom()
  }
}