import expect from 'expect'
import {multiply, divide, subtract} from './16.9'

describe('16.9', () => {
  describe('multiply', () => {
    it('should multiply 0', () => {
      expect(multiply(0, 5)).toEqual(0)
      expect(multiply(2, 0)).toEqual(0)
      expect(multiply(0, 0)).toEqual(0)
    })
    it('should multiply positives', () => {
      expect(multiply(3, 6)).toEqual(18)
      expect(multiply(4, 3)).toEqual(12)
    })
    it('should multiply one negative', () => {
      expect(multiply(4, -5)).toEqual(-20)
    })
    it('should multiply double negative', () => {
      expect(multiply(-4, -6)).toEqual(24)
    })
  })
  describe('subtract', () => {
    it('should subtract', () => {
      expect(subtract(4, -8)).toEqual(12)
      expect(subtract(-5, -4)).toEqual(-1)
      expect(subtract(7, 3)).toEqual(4)
    })
  })
  describe('divide', () => {
    it('should divide 0', () => {
      expect(divide(0, 5)).toEqual(0)
      expect(divide(3, 0)).toEqual(undefined)
    })
    it('should divide positives', () => {
      expect(divide(6, 3)).toEqual(2)
      expect(divide(3, 4)).toEqual(0)
    })
    it('should divide one negative', () => {
      expect(divide(20, -5)).toEqual(-4)
    })
    it('should divide double negative', () => {
      expect(divide(-10, -5)).toEqual(2)
    })
  })
})
