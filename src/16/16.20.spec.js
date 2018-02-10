import expect from 'expect'
import {t9} from './16.20'

describe('16.20', () => {
  it('should return words from sequence', () => {
    expect(t9(8378)).toEqual(['test', 'vert', 'vest'])
  })
})
