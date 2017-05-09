import expect from 'expect'
import Stack from '../structures/Stack'
import {StackWithSize, SetOfStacks} from './3.3'

describe('3.3', () => {

  describe('StackWithSize', () => {

    it('should extend Stack', () => {
      const stack = new StackWithSize()
      expect(stack).toBeA(Stack)
    })

    describe('constructor()', () => {

      it('should return an object with size and maxSize', () => {
        const stack = new StackWithSize(5)
        expect(stack.size).toEqual(0)
        expect(stack.maxSize).toEqual(5)
      })

      it('should set a default maxSize', () => {
        const stack = new StackWithSize()
        expect(stack.maxSize).toEqual(10)
      })
    })

    describe('push()', () => {
      const stack = new StackWithSize(2)

      it('should push item to top of stack increase size by 1', () => {
        stack.push('data1')
        expect(stack.size).toEqual(1)
        expect(stack.peek()).toEqual('data1')
        stack.push('data2')
        expect(stack.size).toEqual(2)
        expect(stack.peek()).toEqual('data2')
      })

      it('should return null and not incremement size if stack is full', () => {
        expect(stack.push('data3')).toEqual(null)
        expect(stack.size).toEqual(2)
        expect(stack.peek()).toEqual('data2')
      })
    })

    describe('pop()', () => {
      const stack = new StackWithSize(2)

      it('should return the top item and decrease size by 1', () => {
        stack.push('data1')
        stack.push('data2')
        expect(stack.pop()).toEqual('data2')
        expect(stack.size).toEqual(1)
        expect(stack.pop()).toEqual('data1')
        expect(stack.size).toEqual(0)
      })

      it('should return null and not decrease size if stack is empty', () => {
        expect(stack.pop()).toEqual(null)
        expect(stack.size).toEqual(0)
      })
    })

    describe('popBottom()', () => {
      const stack = new StackWithSize(3)

      it('should pop off the bottom and decrease the size', () => {
        stack.push(1)
        stack.push(2)
        stack.push(3)
        expect(stack.size).toEqual(3)
        expect(stack.popBottom()).toEqual(1)
        expect(stack.size).toEqual(2)
        expect(stack.popBottom()).toEqual(2)
        expect(stack.size).toEqual(1)
        expect(stack.popBottom()).toEqual(3)
        expect(stack.size).toEqual(0)
      })

      it('should return null if stack is empty and not decrease size', () => {
        expect(stack.popBottom()).toEqual(null)
        expect(stack.size).toEqual(0)
      })
    })

    describe('full()', () => {
      const stack = new StackWithSize(2)

      it('should return false if not full', () => {
        expect(stack.full()).toEqual(false)
      })

      it('should return true if full', () => {
        stack.push(1)
        stack.push(2)
        expect(stack.full()).toEqual(true)
      })
    })
  })

  describe('SetOfStacks', () => {

    describe('constructor()', () => {

      it('should return an object with stacks, activeStack and maxStackSize', () => {
        const set = new SetOfStacks(3)
        expect(set.stacks).toBeA(Array)
        expect(set.stacks.length).toEqual(1)
        expect(set.stacks[0]).toBeA(StackWithSize).toEqual(set.activeStack)
        expect(set.stacks[0].maxSize).toEqual(3)
        expect(set.maxStackSize).toEqual(3)
      })

      it('should set maxStackSize to 10 by default', () => {
        const set = new SetOfStacks()
        expect(set.maxStackSize).toEqual(10)
      })
    })

    describe('push()', () => {
      const set = new SetOfStacks(2)

      it('should push to the activeStack', () => {
        set.push('data1')
        expect(set.peek()).toEqual('data1')
        set.push('data2')
        expect(set.peek()).toEqual('data2')
      })

      it('should push to a new stack if activeStack is full', () => {
        set.push('data3')
        expect(set.stacks.length).toEqual(2)
        expect(set.stacks[1]).toEqual(set.activeStack)
        expect(set.peek()).toEqual('data3')
      })
    })

    describe('pop()', () => {
      const set = new SetOfStacks(2)
      set.push('data1')
      set.push('data2')
      set.push('data3')

      it('should pop the top item from the activeStack', () => {
        expect(set.pop()).toEqual('data3')
      })

      it('should discard the activeStack if it is empty and use the next stack', () => {
        expect(set.stacks.length).toEqual(2)
        expect(set.stacks[1]).toEqual(set.activeStack)
        expect(set.pop()).toEqual('data2')
        expect(set.stacks.length).toEqual(1)
        expect(set.stacks[0]).toEqual(set.activeStack)
      })

      it('should return null if only one empty stack in set', () => {
        expect(set.pop()).toEqual('data1')
        expect(set.pop()).toEqual(null)
        expect(set.stacks.length).toEqual(1)
        expect(set.stacks[0].size).toEqual(0)
      })
    })

    describe('popAt()', () => {
      const set = new SetOfStacks(2)
      set.push('data1')
      set.push('data2')
      set.push('data3')
      set.push('data4')

      it('should pop at index', () => {
        expect(set.popAt(1)).toEqual('data4')
        expect(set.popAt(0)).toEqual('data2')
        expect(set.popAt(1)).toEqual(null)
        expect(set.popAt(0)).toEqual('data3')
        expect(set.popAt(0)).toEqual('data1')
        expect(set.popAt(0)).toEqual(null)
      })
    })
  })
})