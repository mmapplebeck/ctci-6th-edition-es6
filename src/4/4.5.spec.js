import expect from 'expect'
import {Node as TreeNode} from '../structures/Graph'
import {isBST} from './4.5'

describe('4.5', () => {

  describe('isBST()', () => {

    it('should return true if binary tree is a binary search tree', () => {
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

      node3.left = node1
      node3.right = node5
      node1.left = node0
      node1.right = node2
      node5.left = node4
      node5.right = node6

      expect(isBST(node3)).toEqual(true)
    })

    it('should return false if binary tree is not a binary search tree', () => {
      //        2
      //      1   5  
      //     0 3 4 6
      //
      let node6 = new TreeNode(6)
      let node5 = new TreeNode(5)
      let node4 = new TreeNode(4)
      let node3 = new TreeNode(3)
      let node2 = new TreeNode(2)
      let node1 = new TreeNode(1)
      let node0 = new TreeNode(0)

      node2.left = node1
      node2.right = node5
      node1.left = node0
      node1.right = node3
      node5.left = node4
      node5.right = node6

      expect(isBST(node2)).toEqual(false)
    })
  })
})