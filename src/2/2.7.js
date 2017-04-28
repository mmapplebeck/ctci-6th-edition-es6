import Node from '../structures/LinkedList'

export const getKthNode = (list, k) => {
  let head = list
  let count = 0
  while(head !== null && count !== k) {
    head = head.next
    count += 1
  }
  return head
}

export const getIntersectingNode = (list1, list2) => {
  let head1 = list1
  let head2 = list2
  let length1 = 0
  let length2 = 0
  while(head1.next !== null || head2.next !== null) {
    if (head1.next !== null) {
      length1 += 1
      head1 = head1.next
    }
    if (head2.next !== null) {
      length2 += 1
      head2 = head2.next
    }
  }
  if (head1 !== head2) return null
  return getKthNode(length1 > length2 ? list1 : list2, Math.abs(length1 - length2) + 1)
}