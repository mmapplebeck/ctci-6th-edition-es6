export const getLoopingNode = list => {
  let slow = list
  let fast = list
  while(slow !== null && fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      const loopSize = getLoopSize(list, slow)
      let count = 0
      slow = null
      fast = list
      while(true) {
        fast = fast.next
        if (slow !== null) slow = slow.next
        if (slow === fast) return slow
        if (++count === loopSize) slow = list
      }
    }
  }
  return null
}

export const getLoopSize = (list, node) => {
  let start = node
  let head = node
  let count = 0
  while(head !== null && head !== start || count === 0) {
    count += 1
    head = head.next
  }
  return count
}