import expect from 'expect'
import {encodeSpaces} from './1.3'

describe('1.3', () => {

  describe('encodeSpaces()', () => {
    
    it('should url encode spaces and trim to length', () => {
      expect(encodeSpaces('  foo bar baz  ', 14)).toEqual('%20%20foo%20bar%20baz%20')
    })
  })
})