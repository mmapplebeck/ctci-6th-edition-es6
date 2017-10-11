import expect from 'expect'
import {findPermutations} from './8.8'

describe('8.8', () => {
  describe('findPermutations', () => {
    it('should return array of all permutations', () => {
      const expected = ['al', 'la']
      expect(findPermutations('all')).toEqual(expected)
    })
  })
})