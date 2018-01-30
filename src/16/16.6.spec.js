import expect from 'expect'
import {smallestDiff, smallestDiffOptimized} from './16.6'

describe('16.6', () => {
  const check = fn => {
    it('should return smallest non negative diff between two lists', () => {
      expect(fn([1, 3, 15, 11, 2], [23, 127, 235, 19, 8])).toEqual(3) // [11, 8]
    })
  }
  describe('smallestDiff', () => {
    check(smallestDiff)
  })
  describe('smallestDiffOptimized', () => {
    check(smallestDiffOptimized)
  })

})
