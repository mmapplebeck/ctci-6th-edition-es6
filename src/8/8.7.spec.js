import expect from 'expect'
import {findPermutations} from './8.7'

describe('8.7', () => {
  describe('findPermutations', () => {
    it('should return array of all permutations', () => {
      const expected = ['cat', 'act', 'atc', 'cta', 'tca', 'tac']
      expect(findPermutations('cat')).toEqual(expected)
    })
  })
})