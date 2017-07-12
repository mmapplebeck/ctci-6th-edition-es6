import expect from 'expect'
import {Node as TreeNode} from '../structures/Graph'
import {checkSubtree} from './4.10'

describe('4.10', () => {

  describe('checkSubtree()', () => {

    //     4
    //   2   6
    // 1  3 5  7

    let t1node1 = new TreeNode(1)
    let t1node2 = new TreeNode(2)
    let t1node3 = new TreeNode(3)
    let t1node4 = new TreeNode(4)
    let t1node5 = new TreeNode(5)
    let t1node6 = new TreeNode(6)
    let t1node7 = new TreeNode(7)

    t1node4.left = t1node2
    t1node4.right = t1node6
    t1node2.left = t1node1
    t1node2.right = t1node3
    t1node6.left = t1node5
    t1node6.right = t1node7

    it('should return true if t2 is a subtree of t1', () => {
      //   6
      // 5   7

      let t2node5 = new TreeNode(5)
      let t2node6 = new TreeNode(6)
      let t2node7 = new TreeNode(7)
      
      t2node6.left = t2node5
      t2node6.right = t2node7

      expect(checkSubtree(t1node4, t2node5)).toEqual(true)

      //   2
      // 1   3

      let t3node1 = new TreeNode(1)
      let t3node2 = new TreeNode(2)
      let t3node3 = new TreeNode(3)
      
      t3node2.left = t3node1
      t3node2.right = t3node3

      expect(checkSubtree(t1node4, t3node2)).toEqual(true)

      // 1

      let t4node1 = new TreeNode(1)

      expect(checkSubtree(t1node4, t4node1)).toEqual(true)
    })

    it('should return false if t2 is not subtree of t1', () => {

      //   6
      //     7

      let t2node6 = new TreeNode(6)
      let t2node7 = new TreeNode(7)
      
      t2node6.right = t2node7

      expect(checkSubtree(t1node4, t2node6)).toEqual(false) 

    })
  })
})