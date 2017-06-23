import Node from '../structures/LinkedList'

export const partition = (linkedList, partition) => {
  let beforeStart = null
  let beforeEnd = null
  let afterStart = null
  let afterEnd = null

  let head = linkedList

  while (head) {
    if (head.data < partition) {
      if (beforeStart === null) {
        beforeStart = head
        beforeEnd = beforeStart
      } else {
        beforeEnd.next = head
        beforeEnd = head
      }
    } else {
      if (afterStart === null) {
        afterStart = head
        afterEnd = afterStart
      } else {
        afterEnd.next = head
        afterEnd = head
      }
    }
    head = head.next
  }

  afterEnd.next = null
  
  if (beforeEnd === null) return afterStart

  beforeEnd.next = afterStart

  return beforeStart
}