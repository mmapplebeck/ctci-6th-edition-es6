import expect from 'expect'
import {factorial, zerosSimple, factorsOfFive, zeros} from './16.5'

describe('16.5', () => {
  describe('factorial', () => {
    it('should return the factorial', () => {
      expect(factorial(5)).toEqual(120)
    })
  })

  describe('zerosSimple', () => {
    it('should return the number of trailing zeros of the factorial', () => {
      expect(zerosSimple(5)).toEqual(1)
    })
  })

  describe('factorsOfFive', () => {
    it('should return how many times input is evenly divisible by five', () => {
      expect(factorsOfFive(125)).toEqual(3);
    });
  })

  describe('zeros', () => {
    it('should return the number of trailing zeros of the factorial', () => {
      expect(zeros(25)).toEqual(6)
    })
  })
})
