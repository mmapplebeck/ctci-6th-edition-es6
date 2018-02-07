import expect from 'expect'
import subsort from './16.16'

describe('16.16', () => {
  it('should return left and right indeces which sorting between would result in a sorted array', () => {
    expect(subsort([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19])).toEqual({
      farthestLeft: 3,
      farthestRight: 9
    })
  })
})
