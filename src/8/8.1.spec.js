import expect from 'expect'
import {countWays} from './8.1'

describe('8.1', () => {

  describe('countWays()', () => {

    it('should return number of ways', () => {

      expect(countWays(5)).toEqual(13)
    })
  })
})