import expect from 'expect'
import Node from '../structures/LinkedList'
import {deleteMiddleNode} from './2.3'

describe('2.3', () => {

  describe('deleteMiddleNode()', () => {

    it('should delete node from linked list', () => {
      const linkedList = new Node(1)
        .appendToTail(2)
        .appendToTail(3)
        .appendToTail(4)
        .appendToTail(5)
      const expected = new Node(1)
        .appendToTail(2)
        .appendToTail(4)
        .appendToTail(5)
      deleteMiddleNode(linkedList.next.next)
      expect(linkedList).toEqual(expected)
    })
  })
})