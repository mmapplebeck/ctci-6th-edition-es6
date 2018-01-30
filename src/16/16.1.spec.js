import expect from 'expect'
import swap from './16.1'

describe('16.1', () => {
  describe('swap', () => {
    it('should swap two numbers in place', () => {
      let {a, b} = swap(5, 7);
      expect(a).toEqual(7);
      expect(b).toEqual(5);
    })
  })
})
