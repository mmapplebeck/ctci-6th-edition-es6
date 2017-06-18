import expect from 'expect'
import {Node as TreeNode} from '../structures/Graph'
import {checkHeight, checkBalanced} from './4.4'

describe('4.4', () => {

  describe('checkHeight()', () => {

    it('should return -1 if node is null', () => {
      expect(checkHeight(null)).toEqual(-1)
    })

    it('should return the height if balanced', () => {
      let node3 = new TreeNode(3)
      let node2 = new TreeNode(2)
      let node1 = new TreeNode(1)
      node2.left = node1
      node2.right = node3

      expect(checkHeight(node2)).toEqual(1)
    })

    it('should return null if tree is not balanced', () => {
      let node5 = new TreeNode(5)
      let node4 = new TreeNode(4)
      let node3 = new TreeNode(3)
      let node2 = new TreeNode(2)
      let node1 = new TreeNode(1)
      
      node4.left = node3
      node4.right = node5
      node3.left = node2
      node2.left = node1

      expect(checkHeight(node4)).toEqual(null)
    })
  })
})