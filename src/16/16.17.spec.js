import expect from 'expect'
import contiguousSequence from './16.17'

describe('16.17', () => {
  it('should return the sum of the contiguous sequence with the largest sum', () => {
    expect(contiguousSequence([1, -2, 5, -1, -3, 2, 3])).toEqual(6)
  })
})
