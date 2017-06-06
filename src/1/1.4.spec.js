import expect from 'expect'
import {isPermutationPalindrome} from './1.4'

describe('1.4', () => {

  describe('isPermutationPalindrome()', () => {

    it('should return true if permutation is palindrome', () => {
      // ababa
      expect(isPermutationPalindrome('bbaaa')).toEqual(true)

      // abcba
      expect(isPermutationPalindrome('aabbc')).toEqual(true)

      // abba
      expect(isPermutationPalindrome('aabb')).toEqual(true)

      // aba
      expect(isPermutationPalindrome('aab')).toEqual(true)

      expect(isPermutationPalindrome('aba')).toEqual(true)
      expect(isPermutationPalindrome('aa')).toEqual(true)
      expect(isPermutationPalindrome('a')).toEqual(true)
    })

    it('should return false if permutation is not palindrome', () => {
      expect(isPermutationPalindrome('aabbcd')).toEqual(false)
      expect(isPermutationPalindrome('abc')).toEqual(false)
    })
  })
})