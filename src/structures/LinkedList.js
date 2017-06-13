export default class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }

  appendToTail(data) {
    const node = new Node(data)
    let head = this
    while (head.next !== null) {
      head = head.next
    }
    head.next = node
    return this
  }
}