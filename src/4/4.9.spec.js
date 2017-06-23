import expect from 'expect'
import {Node as TreeNode} from '../structures/Graph'
import {getOrders} from './4.9'

describe('4.9', () => {

  describe('getOrders()', () => {

    it('should return the orders', () => {

      let node1 = new TreeNode(1)
      let node2 = new TreeNode(2)
      let node3 = new TreeNode(3)
      let node4 = new TreeNode(4)
      let node5 = new TreeNode(5)
      let node6 = new TreeNode(6)
      let node7 = new TreeNode(7)

      node4.left = node2
      node2.left = node1
      node2.right = node3
      node4.right = node6
      node6.left = node5
      node6.right = node7

      expect(getOrders(node4)).toBeA(Array)
      expect(getOrders(node4).length).toEqual(8)
    })
  })
})