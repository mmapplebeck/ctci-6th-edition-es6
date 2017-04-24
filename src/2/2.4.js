import Node from '../structures/LinkedList'

export const partition = (linkedList, value) => {
	let head = linkedList
	while(head !== null) {
		let next = head.next
		if (head.data < value) {
			head.next = linkedList
			linkedList = head
		}
		head = next
	}
	return linkedList
}