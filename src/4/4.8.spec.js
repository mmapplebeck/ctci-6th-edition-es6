import expect from 'expect'
import {Node as TreeNode} from '../structures/Graph'
import * as methods from './4.8'

describe('4.8', () => {

  describe('commonAncestor1()', () => {

    it('should return the common ancestor', () => {
      //       4
      //     3
      //   2   1
      // 5  0

      let node5 = new TreeNode(5)
      let node4 = new TreeNode(4)
      let node3 = new TreeNode(3)
      let node2 = new TreeNode(2)
      let node1 = new TreeNode(1)
      let node0 = new TreeNode(0)

      node5.parent = node2
      node0.parent = node2
      node2.parent = node3
      node1.parent = node3
      node3.parent = node4

      expect(methods.commonAncestor1(node5, node1)).toEqual(node3)
    })
  })

  describe('commonAncestor2()', () => {

    it('should return the common ancestor', () => {
      //       4
      //     3
      //   2   1
      // 5  0

      let node5 = new TreeNode(5)
      let node4 = new TreeNode(4)
      let node3 = new TreeNode(3)
      let node2 = new TreeNode(2)
      let node1 = new TreeNode(1)
      let node0 = new TreeNode(0)

      node4.left = node3
      node3.right = node1
      node3.left = node2
      node2.right = node0
      node2.left = node5

      node5.parent = node2
      node0.parent = node2
      node2.parent = node3
      node1.parent = node3
      node3.parent = node4

      expect(methods.commonAncestor2(node5, node1)).toEqual(node3)
    })
  })

  describe('commonAncestor3()', () => {

    it('should return the common ancestor', () => {

      let node5 = new TreeNode(5)
      let node4 = new TreeNode(4)
      let node3 = new TreeNode(3)
      let node2 = new TreeNode(2)
      let node1 = new TreeNode(1)
      let node0 = new TreeNode(0)

      node4.left = node3
      node3.right = node1
      node3.left = node2
      node2.right = node0
      node2.left = node5

      expect(methods.commonAncestor3(node4, node5, node1)).toEqual(node3)
    })
  })
})