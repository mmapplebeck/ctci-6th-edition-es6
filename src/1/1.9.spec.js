import expect from 'expect'
import {isSubstring, isRotation} from './1.9'

describe('1.9', () => {

  describe('isSubstring()', () => {

    it('should return true if string is substring of other string', () => {
      expect(isSubstring('erbottlewaterbottlewat', 'waterbottle')).toEqual(true)
    })

    it('should return false if string is not substring of other string', () => {
      expect(isSubstring('botwatertlebotwatertle', 'waterbottle')).toEqual(false)
    })
  })

  describe('isRotation()', () => {

    it('should return true if string is rotation of other string', () => {
      expect(isRotation('waterbottle', 'erbottlewat')).toEqual(true)
    })

    it('should return false if string is not rotation of other string', () => {
      expect(isRotation('waterbottle', 'botwatertle')).toEqual(false)
    })
  })
})