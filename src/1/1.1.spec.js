import expect from 'expect'
import {isUnique} from './1.1'

describe('1.1', () => {

  describe('isUnique()', () => {

    it('should return true if all characters are unique', () => {
      const str = 'abcdefg'
      expect(isUnique(str)).toEqual(true)
    })

    it('should return false if duplicate character', () => {
      const str = 'abcdefga'
      expect(isUnique(str)).toEqual(false)
    })
  })
})