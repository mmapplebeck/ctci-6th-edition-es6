import expect from 'expect'
import {pondSize} from './16.19'

describe('16.19', () => {
  it('should return sizes of ponds', () => {
    const matrix = [
      [3, 0, 2, 1],
      [0, 1, 3, 0],
      [2, 3, 0, 0]
    ]
    expect(pondSize(matrix)).toEqual([2, 3])
  })
})
