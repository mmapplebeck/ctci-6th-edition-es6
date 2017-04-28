import expect from 'expect'
import Node from '../structures/LinkedList'
import {isPalindrome} from './2.6'

describe('2.6', () => {

  describe('isPalindrome()', () => {

    it('should return true for palindromes', () => {
      const palindrome = new Node('a')
        .appendToTail('b')
        .appendToTail('c')
        .appendToTail('b')
        .appendToTail('a')

      expect(isPalindrome(palindrome)).toEqual(true)
    })

    it('should return false for non-palindromes', () => {
      const nonPalindrome = new Node('a')
        .appendToTail('b')
        .appendToTail('c')

      expect(isPalindrome(nonPalindrome)).toEqual(false)
    })
  })
})