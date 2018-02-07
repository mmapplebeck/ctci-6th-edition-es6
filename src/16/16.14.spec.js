import expect from 'expect'
import {Point} from './16.13'
import bestLine from './16.14'

describe('16.14', () => {
  it('should return the line that passes through the most points', () => {
    const points = [new Point(1, 1), new Point(4, 4), new Point(6, 2), new Point(6, 6)]
    expect(bestLine(points).equation).toEqual('1x')
  })
})
