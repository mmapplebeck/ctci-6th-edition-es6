import expect from 'expect'
import {rotate} from './1.7'

describe('1.7', () => {

  describe('rotate', () => {

    it('should rotate the matrix 90 degrees', () => {
      const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ]
      const expected = [
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3]
      ]
      expect(rotate(matrix)).toEqual(expected)
    })
  })
})