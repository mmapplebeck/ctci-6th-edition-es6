import expect from 'expect'
import {reverse} from './1.2'

describe('1.2', () => {

  describe('reverse()', () => {

    it('should reverse a string', () => {
      const str = 'Hello world!'
      expect(reverse(str)).toEqual('!dlrow olleH')
    })
  })
})