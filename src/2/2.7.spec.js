import expect from 'expect'
import Node from '../structures/LinkedList'
import {getIntersectingNodeIndex} from './2.7'

describe('2.7', () => {

  describe('getIntersectingNodeIndex()', () => {

    it('should return null if lists do not intersect', () => {
      const list1 = new Node(1)
      const list2 = new Node(2).appendToTail(3)
      const actual = getIntersectingNodeIndex(list1, list2)
      expect(actual).toEqual(null)
    })

    it('should return the index if intersecting', () => {
      const sharedNode = new Node(3).appendToTail(4)
      let list1 = new Node(1)
      list1.next = sharedNode
      let list2 = new Node(5).appendToTail(6).appendToTail(7)
      list2.next.next.next = sharedNode
      //       1->3->4
      // 5->6->7->3->4
      // 0  1  2  3  4
      const actual = getIntersectingNodeIndex(list1, list2)
      expect(actual).toEqual(3)
    })
  })
})