import Node from '../structures/LinkedList'

export const deleteMiddleNode = node => {
    node.data = node.next.data
    node.next = node.next.next
}