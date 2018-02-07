import expect from 'expect'
import divingBoard from './16.11'

describe('16.11', () => {
  it('should return set of possible lengths', () => {
    const shorter = 5
    const longer = 10
    const k = 2
    const expected = [10, 15, 20]
    expect(divingBoard(k, shorter, longer)).toEqual(expected)
  })
})
