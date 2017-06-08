import expect from 'expect'
import {compress} from './1.6'

describe('1.6', () => {

  describe('compress()', () => {

    it('should compress the string', () => {
      expect(compress('aaabbcdddd')).toEqual('a3b2c1d4')
    })

    it('should return original string if shorter than compressed', () => {
      expect(compress('abc')).toEqual('abc')
    })
  })
})