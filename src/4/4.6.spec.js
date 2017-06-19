import expect from 'expect'
import {Node as TreeNode} from '../structures/Graph'
import {successor} from './4.6'

describe('4.6', () => {

  describe('successor()', () => {

    it('should return the successor if there is one', () => {
      //        3
      //      1   5  
      //     0 2 4 6
      //
      let node6 = new TreeNode(6)
      let node5 = new TreeNode(5)
      let node4 = new TreeNode(4)
      let node3 = new TreeNode(3)
      let node2 = new TreeNode(2)
      let node1 = new TreeNode(1)
      let node0 = new TreeNode(0)

      node2.parent = node1
      node1.parent = node3
      node0.parent = node1

      node3.left = node1
      node3.right = node5
      node1.left = node0
      node1.right = node2
      node5.left = node4
      node5.right = node6

      expect(successor(node2)).toEqual(node3)
      expect(successor(node3)).toEqual(node5)
      expect(successor(node0)).toEqual(node1)
    })

    it('should return null if no successor', () => {
      //        2
      //      1   3

      let node3 = new TreeNode(3)
      let node2 = new TreeNode(2)
      let node1 = new TreeNode(1)

      node3.parent = node2

      node2.left = node1
      node2.right = node3

      expect(successor(node3)).toEqual(null)
    })
  })
})