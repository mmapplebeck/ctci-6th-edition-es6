import expect from 'expect'
import Node from '../structures/LinkedList'
import {getIntersectingNode, getKthNode} from './2.7'

describe('2.7', () => {

  describe('getKthNode()', () => {

    it('should get the correct nodes', () => {
      let node1 = new Node(1)
      let node2 = new Node(2)
      let node3 = new Node(3)
      node1.next = node2
      node2.next = node3
      expect(getKthNode(node1, 0)).toEqual(node1)
      expect(getKthNode(node1, 1)).toEqual(node2)
      expect(getKthNode(node1, 2)).toEqual(node3)
    })
  })
  
  describe('getIntersectingNode()', () => {

    it('should return null if lists do not intersect', () => {
      const list1 = new Node(1)
      const list2 = new Node(2).appendToTail(3)
      const actual = getIntersectingNode(list1, list2)
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
      const actual = getIntersectingNode(list1, list2)
      expect(actual).toEqual(sharedNode)
    })
  })
})