import expect from 'expect'
import {freq, freqImproved} from './16.2'

describe('16.2', () => {
  const checkFreq = fn => {
    it('should return freq of word in string', () => {
      expect(fn('The brown cow jumped over the moon', 'the')).toEqual(2);
    });
  }

  describe('freq', () => {
    checkFreq(freq)
  })

  describe('freqImproved', () => {
    checkFreq(freqImproved)
  });
})
