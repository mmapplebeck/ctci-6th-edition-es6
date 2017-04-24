import Node from '../structures/LinkedList'

export const getKthToLast = (linkedList, k) => {
	let count = 0
	let head = linkedList
	let runner = linkedList
	while(runner !== null) {
		if (count === k) {
			head = head.next
		} else {
			count += 1
		}
		runner = runner.next
	}
	return count === k ? head.data : null
}