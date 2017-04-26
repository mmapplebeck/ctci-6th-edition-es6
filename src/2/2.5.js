import Node from '../structures/LinkedList'

export const sumLists = (first, second, carry = 0) => {
  if (first === null && second === null && carry === 0) return null
  let sum = carry
  if (first !== null) sum += first.data
  if (second !== null) sum += second.data
  let summed = new Node(sum % 10)
  if (first !== null || second !== null) {
    summed.next = sumLists(
      first == null ? null : first.next,
      second == null ? null : second.next,
      sum >= 10 ? 1 : 0
    )
  }
  return summed
}

export const getLength = list => {
  if (list === null) return 0
  let head = list
  let length = 1
  while(head.next !== null) {
    length += 1
    head = head.next
  }
  return length
}

export const padList = (list, n) => {
  for(let i = 0; i < n; i++) {
    let temp = list
    list = new Node(0)
    list.next = temp
  }
  return list
}

export const appendToList = (list, data) => {
  let node = new Node(data)
  if (list !== null) {
    node.next = list
  }
  return node
}

export const getPartialSum = (first, second) => {
  if(first == null && second == null) {
    return {
      list: null,
      carry: 0
    }
  }
  let partialSum = getPartialSum(first.next, second.next)
  let sum = first.data + second.data + partialSum.carry
  return {
    list: appendToList(partialSum.list, sum % 10),
    carry: sum >= 10 ? 1 : 0
  }
}

export const sumListsForward = (first, second) => {
  if (first === null && second === null) return null
  const l1 = getLength(first)
  const l2 = getLength(second)
  if (l1 < l2) {
    first = padList(first, l2 - l1)
  } else {
    second = padList(second, l1 - l2)
  }
  let partialSum = getPartialSum(first, second)
  if (partialSum.carry === 1) {
    return appendToList(partialSum.list, 1)
  }
  return partialSum.list
}