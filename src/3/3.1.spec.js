import expect from 'expect'
import {MultiStack} from './3.1'

describe('3.1', () => {
  describe('MultiStack', () => {
    const stack = new MultiStack(3)

    describe('push', () => {
      it('should push to the correct stack', () => {
        stack.push(0, '0 first')
        stack.push(0, '0 second')
        stack.push(1, '1 first')
        stack.push(1, '1 second')
        stack.push(2, '2 first')
        stack.push(2, '2 second')
        expect(stack.data[0]).toEqual('0 first')
        expect(stack.data[1]).toEqual('1 first')
        expect(stack.data[2]).toEqual('2 first')
        expect(stack.data[3]).toEqual('0 second')
        expect(stack.data[4]).toEqual('1 second')
        expect(stack.data[5]).toEqual('2 second')
      })
      it('should not push to an invalid stack', () => {
        stack.push(4, 'invalid')
        expect(stack.data.length).toEqual(6)
      })
    })

    describe('pop', () => {
      it('should pop off the correct stack', () => {
        expect(stack.pop(0)).toEqual('0 second')
        expect(stack.pop(0)).toEqual('0 first')
        expect(stack.pop(0)).toEqual(null)
      })
    })

    describe('peek', () => {
      it('should return top of stack', () => {
        expect(stack.peek(0)).toEqual(null)
        expect(stack.peek(1)).toEqual('1 second')
      })
    })

    describe('isEmpty', () => {
      it('should return whether stack is empty', () => {
        expect(stack.isEmpty(0)).toEqual(true)
        expect(stack.isEmpty(1)).toEqual(false)
      })
    })
  })
})