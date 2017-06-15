import expect from 'expect'
import {Node} from '../structures/Graph'
import {minimalBST} from './4.2'

describe('4.2', () => {

  describe('minimalBST()', () => {

    it('should convert ordered list to a minimal height binary tree and return root node', () => {
      const orderedList = [1, 2, 3, 4, 5]
      //     3
      //   2   5
      // 1   4
      
      let node1 = new Node(1)
      let node2 = new Node(2)
      let node3 = new Node(3)
      let node4 = new Node(4)
      let node5 = new Node(5)
      node1.left = null
      node1.right = null
      node2.left = node1
      node2.right = null
      node3.left = node2
      node3.right = node5
      node4.left = null
      node4.right = null
      node5.left = node4
      node5.right = null

      expect(minimalBST(orderedList)).toEqual(node3)
    })
  })
})