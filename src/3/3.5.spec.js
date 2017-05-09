import expect from 'expect'
import Stack from '../structures/Stack'
import {sortStack} from './3.5'

describe('3.5', () => {

  describe('sortStack()', () => {

    it('should sort the stack', () => {
      let stack = new Stack()
      stack.push(2).push(1).push(6).push(5).push(3).push(4).push(7)
      let expected = new Stack()
      expected.push(7).push(6).push(5).push(4).push(3).push(2).push(1)
      let actual = sortStack(stack)
      expect(actual).toEqual(expected)
    })
  })
})