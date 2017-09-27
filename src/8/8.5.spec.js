import expect from 'expect'
import {multiply} from './8.5'

describe('8.5', () => {
  describe('multiply', () => {
    it('should return the multiple of the two numbers', () => {
      expect(multiply(2, 3)).toEqual(6)
      expect(multiply(4, 2)).toEqual(8)
      expect(multiply(3, 3)).toEqual(9)
      expect(multiply(1, 0)).toEqual(0)
      expect(multiply(8, 1)).toEqual(8)
    })
  })
})