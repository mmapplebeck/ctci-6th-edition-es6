import expect from 'expect'
import patternMatching from './16.18'

describe('16.18', () => {
  it('should return if pattern matches', () => {
    expect(patternMatching('aabab', 'catcatgocatgo')).toEqual(true)
  })
})
