import expect from 'expect'
import {magicIndex} from './8.3'

describe('8.3', () => {

  describe('magicIndex()', () => {

    it('should return value if value equals its index', () => {
      const nums = [-5, -4, -3, 3, 8, 10, 15, 30, 33, 45, 50]
      expect(magicIndex(nums)).toEqual(3)
    })

    it('should return null if no magic index exists', () => {
      const nums = [1, 2, 3, 4, 5]
      expect(magicIndex(nums)).toEqual(null)
    })
  })
})