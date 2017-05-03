import expect from 'expect'
import {StackWithMin} from './3.2'

describe('3.2', () => {

  describe('StackWithMin', () => {

    it('should return null if stack is empty', () => {
      const stack = new StackWithMin()
      expect(stack.min()).toEqual(null)
    })

    it('should return the node with lowest value in array', () => {
      const stack = new StackWithMin()
      stack.push(4)
      expect(stack.min()).toEqual(4)
      stack.push(5)
      expect(stack.min()).toEqual(4)
      stack.push(3)
      expect(stack.min()).toEqual(3)
      stack.pop()
      expect(stack.min()).toEqual(4)
    })
  })
})