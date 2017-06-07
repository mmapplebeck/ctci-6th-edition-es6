import expect from 'expect'
import {oneAway} from './1.5'

describe('1.5', () => {

  describe('oneAway()', () => {

    it('should return true for strings one character away', () => {
      expect(oneAway('pale', 'ple')).toEqual(true)
      expect(oneAway('pale', 'pales')).toEqual(true)
      expect(oneAway('pale', 'bale')).toEqual(true)
    })

    it('should return false for strings more than one character away', () => {
      expect(oneAway('ple', 'pel')).toEqual(false)
      expect(oneAway('pale', 'bake')).toEqual(false)
    })
  })
})