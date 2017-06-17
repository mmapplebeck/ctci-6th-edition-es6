import expect from 'expect'
import LinkedListNode from '../structures/LinkedList'
import {Node as TreeNode} from '../structures/Graph'
import {toLinkedLists} from './4.3'

describe('4.3', () => {

  describe('toLinkedLists()', () => {

    it('should return binary tree levels as linked lists', () => {
      //     3
      //   2   5
      // 1   4

      let node1 = new TreeNode(1)
      let node2 = new TreeNode(2)
      let node3 = new TreeNode(3)
      let node4 = new TreeNode(4)
      let node5 = new TreeNode(5)
      node2.left = node1
      node3.left = node2
      node3.right = node5
      node5.left = node4

      let linkedList1 = new LinkedListNode(3)
      let linkedList2 = new LinkedListNode(2)
      linkedList2.appendToTail(5)
      let linkedList3 = new LinkedListNode(1)
      linkedList3.appendToTail(4)

      const expected = [
        linkedList1,
        linkedList2,
        linkedList3
      ]

      expect(toLinkedLists(node3)).toEqual(expected)
    })
  })
})