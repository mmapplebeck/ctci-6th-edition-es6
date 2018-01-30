import expect from 'expect'
import {Point, getIntersection} from './16.3'

describe('16.3', () => {
  it('should get intersection point of two lines', () => {
    const expected = new Point(-1, 2)

    expect(getIntersection(new Point(2, -1), new Point(-1, 2), new Point(-4, -1), new Point(1, 4))).toEqual(expected)
  })

  it('should return null if lines do not intersect', () => {
    expect(getIntersection(new Point(-1, 5), new Point(3, 5), new Point(-1, -3), new Point(5, -3))).toEqual(null)
  })
})
