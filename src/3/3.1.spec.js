import expect from 'expect'
import {FixedSizeMultiStack} from './3.1'
import {fill, times} from 'lodash'

describe('3.1', () => {

  describe('FixedSizeMultiStack', () => {

    describe('constructor()', () => {

      it('should return an object with correct properties', () => {
        const stack = new FixedSizeMultiStack(2, 5)
        expect(stack.stackCount).toEqual(2)
        expect(stack.stackSize).toEqual(5)
        expect(stack.positions).toEqual([0, 0])
        expect(stack.data).toEqual(fill(Array(10), null))
      })

      it('should return an object with correct default properties', () => {
        const stack = new FixedSizeMultiStack()
        expect(stack.stackCount).toEqual(3)
        expect(stack.stackSize).toEqual(10)
      })
    })

    describe('getPosition()', () => {

      it('should return null if stackId is invalid', () => {
        const stack = new FixedSizeMultiStack()
        let position
        try {
          position = stack.getPosition(3)
        } catch(e) {
          expect(position).toEqual(null)
        }
      })

      it('should return position', () => {
        const stack = new FixedSizeMultiStack
        expect(stack.getPosition(0)).toEqual(0)
        expect(stack.getPosition(1)).toEqual(0)
        expect(stack.getPosition(2)).toEqual(0)
        stack.push(1, 'data')
        stack.push(2, 'data')
        stack.push(2, 'data')
        expect(stack.getPosition(0)).toEqual(0)
        expect(stack.getPosition(1)).toEqual(1)
        expect(stack.getPosition(2)).toEqual(2)
      })
    })

    describe('checkFull()', () => {

      it('should return false if not full', () => {
        const stack = new FixedSizeMultiStack()
        expect(stack.checkFull(0)).toEqual(false)
        times(9, () => stack.push(0, 'data'))
        expect(stack.checkFull(0)).toEqual(false)
      })

      it('should return true if stack is full', () => {
        const stack = new FixedSizeMultiStack()
        times(10, () => stack.push(0, 'data'))
        expect(stack.checkFull(0)).toEqual(true)
      })
    })

    describe('checkEmpty()', () => {

      it('should return false if not empty', () => {
        const stack = new FixedSizeMultiStack()
        stack.push(0, 'data')
        expect(stack.checkFull(0)).toEqual(false)
      })

      it('should return true if empty', () => {
        const stack = new FixedSizeMultiStack()
        expect(stack.checkEmpty(0)).toEqual(true)
      })
    })

    describe('push()', () => {

      it('should push a new item to the specified stack', () => {
        const stack = new FixedSizeMultiStack()
        stack.push(0, 'data1')
        expect(stack.peek(0)).toEqual('data1')
        stack.push(0, 'data2')
        expect(stack.peek(0)).toEqual('data2')
      })

      it('should throw an error if the stack is full', () => {
        const stack = new FixedSizeMultiStack()
        try {
          times(20, () => stack.push(0, 'data'))
        } catch(e) {
          expect(stack.getPosition(0)).toEqual(10)
        }
      })
    })

    describe('pop()', () => {

      it('should pop an item from the specified stack', () => {
        const stack = new FixedSizeMultiStack()
        stack.push(0, 'data1')
        stack.push(0, 'data2')
        expect(stack.pop(0)).toEqual('data2')
        expect(stack.pop(0)).toEqual('data1')
      })

      it('should throw an error and return null if popping from an empty stack', () => {
        const stack = new FixedSizeMultiStack()
        let data
        try {
          data = stack.pop(0)
        } catch(e) {
          expect(data).toEqual(null)
        }
      })
    })

    describe('peek()', () => {

      it('should return the top item in the stack', () => {
        const stack = new FixedSizeMultiStack()
        stack.push(0, 'data1')
        expect(stack.peek(0)).toEqual('data1')
        stack.push(0, 'data2')
        expect(stack.peek(0)).toEqual('data2')
        stack.push(1, 'data3')
        expect(stack.peek(1)).toEqual('data3')
      })

      it('should return null if stack is empty', () => {
        const stack = new FixedSizeMultiStack()
        expect(stack.peek(0)).toEqual(null)
      })
    })

    describe('isEmpty()', () => {

      it('should return true if stack is empty', () => {
        const stack = new FixedSizeMultiStack()
        expect(stack.isEmpty(0)).toEqual(true)
      })

      it('should return false if stack is not empty', () => {
        const stack = new FixedSizeMultiStack()
        stack.push(0, 'data')
        expect(stack.isEmpty(0)).toEqual(false)
      })
    })
  })
})