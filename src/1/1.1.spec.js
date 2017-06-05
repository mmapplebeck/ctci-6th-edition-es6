import expect from 'expect'
import {isUniqueLogN, sort, isUniqueNLogN} from './1.1'

describe('1.1', () => {

  const testUniqueness = fn => {
    it('should return true if all characters are unique', () => {
      const str = 'abcdefg'
      expect(fn(str)).toEqual(true)
    })

    it('should return false if duplicate character', () => {
      const str = 'abcdefga'
      expect(fn(str)).toEqual(false)
    })
  }

  describe('isUniqueLogN()', () => {
    testUniqueness(isUniqueLogN)
  })

  describe('isUniqueNLogN', () => {
    testUniqueness(isUniqueNLogN)
  })
})