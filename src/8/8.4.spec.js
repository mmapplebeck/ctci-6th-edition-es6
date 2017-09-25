import expect from 'expect'
import {powerSet} from './8.4'

describe('8.4', () => {
  describe('powerSet', () => {
    it('should return all subsets of the set', () => {
      const set = [1, 2, 3]
      const expected = [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
      expect(powerSet(set)).toEqual(expected)
    })
  })
})