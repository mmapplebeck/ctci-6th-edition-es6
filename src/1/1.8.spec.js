import expect from 'expect'
import {zeroMatrix} from './1.8'

describe('1.8', () => {

  describe('zeroMatrix()', () => {

    it('should zero row and column if element is 0', () => {
      const matrix = [
        [1,  2,  3,  4],
        [5,  0,  7,  8],
        [9, 10, 11, 12]
      ]
      const expected = [
        [1, 0,  3,  4],
        [0, 0,  0,  0],
        [9, 0, 11, 12]
      ]
      expect(zeroMatrix(matrix)).toEqual(expected)
    })
  })
})