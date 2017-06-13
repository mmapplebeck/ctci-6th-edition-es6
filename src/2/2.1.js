import Node from '../structures/LinkedList'

export const removeDupes = linkedList => {
    let head = linkedList
    let data = {}
    while (head !== null && head.next !== null) {
        data[head.data] = true
        if (data[head.next.data]) {
            head.next = head.next.next
        }
        head = head.next
    }
    return linkedList
}

export const removeDupesNoBuffer = linkedList => {
    let head = linkedList
    while (head !== null && head.next !== null) {
        let runner = head
        while (runner !== null && runner.next !== null) {
            if (runner.next.data === head.data) {
                runner.next = runner.next.next
            }
            runner = runner.next
        }
        head = head.next
    }
    return linkedList
}