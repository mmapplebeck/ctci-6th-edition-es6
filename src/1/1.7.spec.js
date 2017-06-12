import expect from 'expect'
import {rotate, rotateInPlace} from './1.7'

describe('1.7', () => {

  const testRotate = fn => {
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
    expect(fn(matrix)).toEqual(expected)
  }

  describe('rotate()', () => {

    it('should rotate the matrix 90 degrees', () => {
      testRotate(rotate)
    })
  })

  describe('rotateInPlace()', () => {

    it('should rotate the matrix 90 degrees', () => {
      testRotate(rotateInPlace)
    })
  })
})