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