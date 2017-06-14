import Node from '../structures/LinkedList'

export const getKthToLast = (linkedList, k) => {
    let runner = linkedList
    let head = linkedList
    let count = 0
    while (runner !== null) {
        if (count === k) {
            head = head.next
        } else {
            count += 1
        }
        runner = runner.next
    }
    return count === k ? head.data : null
}