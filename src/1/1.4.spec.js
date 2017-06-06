import expect from 'expect'
import {isPermutationPalindrome} from './1.4'

describe('1.4', () => {

  describe('isPermutationPalindrome()', () => {

    it('should return true if permutation is palindrome', () => {
      // abcba
      expect(isPermutationPalindrome('aabbc')).toEqual(true)
    })

    it('should return false if permutation is not palindrome', () => {
      expect(isPermutationPalindrome('aabbcd')).toEqual(false)
    })
  })
})