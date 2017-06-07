import expect from 'expect'
import {isPermutationPalindrome} from './1.4'

describe('1.4', () => {

  describe('isPermutationPalindrome()', () => {

    it('should return true if permutation is palindrome', () => {
      // taco cat
      expect(isPermutationPalindrome('Tact Coa')).toEqual(true)
    })

    it('should return false if permutation is not palindrome', () => {
      expect(isPermutationPalindrome('foobar')).toEqual(false)
    })
  })
})