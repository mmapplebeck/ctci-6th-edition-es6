import expect from 'expect'
import {Node} from '../structures/Graph'
import {pathsToSum, pathsToSumOptimized} from './4.12'

describe('4.12', () => {

  const testPathsToSum = method => {
    it('should return count of all possible paths to sum', () => {
      //       2
      //    -1  -2
      //  2   0    1
      //     2    2
      let node = new Node(2)
      node.left = new Node(-1)
      node.left.left = new Node(2)
      node.left.right = new Node(0)
      node.left.right.left = new Node(2)
      node.right = new Node(-2)
      node.right.right = new Node(1)
      node.right.right.left = new Node(2)

      expect(method(node, 3)).toEqual(4)
    })
  }

  describe('pathsToSum()', () => {
    testPathsToSum(pathsToSum)
  })

  describe('pathsToSumOptimized()', () => {
    testPathsToSum(pathsToSumOptimized)
  })
})