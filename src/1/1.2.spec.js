import expect from 'expect'
import {isPermutation} from './1.2'

describe('1.2', () => {

  describe('isPermutation()', () => {

    it('should return true if strings are permutations', () => {
      expect(isPermutation('abc', 'abc')).toEqual(true)
      expect(isPermutation('abba', 'baab')).toEqual(true)
    })

    it('should return false if strings are not permutations', () => {
      expect(isPermutation('abc', 'abcd')).toEqual(false)
      expect(isPermutation('abba', 'baca')).toEqual(false)
    })
  })
})