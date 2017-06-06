import expect from 'expect'
import {encodeSpaces} from './1.3'

describe('1.3', () => {

  describe('encodeSpaces()', () => {
    
    it('should url encode spaces', () => {
      expect(encodeSpaces(' foo bar baz ')).toEqual('%20foo%20bar%20baz%20')
    })
  })
})