import Node from '../structures/LinkedList'

export const removeDupes = linkedList => {
	let head = linkedList
	let data = {
		[head.data]: 1
	}
	while(head.next !== null) {
		if (data.hasOwnProperty(head.next.data)) {
			head.next = head.next.next
		} else {
			data[head.next.data] = 1
		}
		head = head.next
	}
	return linkedList
}

export const removeDupesNoBuffer = linkedList => {
	let head = linkedList
	while(head !== null) {
		let data = head.data
		let runner = head
		while(runner.next !== null) {
			if (runner.next.data === data) {
				runner.next = runner.next.next
			}
			runner = runner.next
		}
		head = head.next
	}
	return linkedList
}