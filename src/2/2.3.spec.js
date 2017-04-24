import Node from '../structures/LinkedList'
import {deleteMiddleNode} from './2.3'

describe('2.3', () => {

  describe('deleteMiddleNode()', () => {

    it('should delete node from linked list', () => {
      let linkedList = new Node(1).appendToTail(2)
      let middleNode = new Node(3)
      linkedList.appendToTail(middleNode)
        .appendToTail(4)
        .appendToTail(5)
      const expected = new Node(1)
        .appendToTail(2)
        .appendToTail(4)
        .appendToTail(5)
      deleteMiddleNode(middleNode)
      //expect(linkedList).toEqual(expected)
    })
  })
})