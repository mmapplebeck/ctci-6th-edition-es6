import expect from 'expect'
import {Point, Square, Line, bisectSquares} from './16.13'

describe('16.13', () => {
  it('should return a line that bisects the squares', () => {
    const square1 = new Square(new Point(0, 4), 2)
    const square2 = new Square(new Point(2, 6), 2)
    expect(bisectSquares(square1, square2).equation).toEqual('1x + 2')
  })
})
