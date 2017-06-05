import expect from 'expect'
import {isUnique, sort, isUniqueNLogN} from './1.1'

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

  describe('isUnique()', () => {
    testUniqueness(isUnique)
  })

  describe('isUniqueNLogN', () => {
    testUniqueness(isUniqueNLogN)
  })
})