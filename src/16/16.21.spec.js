import expect from 'expect'
import sumSwap from './16.21'

describe('16.21', () => {
  it('should return pairs of values that if swapped would make total of all items in array both equal', () => {
    expect(sumSwap([4, 1, 2, 1, 1, 2], [3, 6, 3, 3])).toEqual([[4, 6], [1, 3]])
  })
})
