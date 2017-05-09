import expect from 'expect'
import MyQueue from './3.4'
import Stack from '../structures/Stack'

describe('3.4', () => {

  describe('MyQueue', () => {

    let queue = new MyQueue()

    describe('constructor()', () => {

      it('should set stackOldest and stackNewest', () => {
        expect(queue.stackOldest).toBeA(Stack)
        expect(queue.stackNewest).toBeA(Stack)
      })
    })

    describe('add()', () => {

      it('should add to stackNewest', () => {
        expect(queue.stackNewest.peek()).toEqual(null)
        queue.add('first')
        expect(queue.stackNewest.peek()).toEqual('first')
        queue.add('second')
        expect(queue.stackNewest.peek()).toEqual('second')
      })
    })

    describe('shiftStacks()', () => {

      it('should shift from newest to oldest if oldest is empty', () => {
        expect(queue.stackNewest.isEmpty()).toEqual(false)
        expect(queue.stackOldest.isEmpty()).toEqual(true)
        queue.shiftStacks()
        expect(queue.stackOldest.peek()).toEqual('first')
        expect(queue.stackNewest.isEmpty()).toEqual(true)
      })
    })

    describe('remove()', () => {

      it('should pop from stackOldest', () => {
        expect(queue.remove()).toEqual('first')
      })
    })

    describe('peek()', () => {

      it('should get top value from stackOldest', () => {
        expect(queue.stackOldest.peek()).toEqual('second')
      })
    })
  })
})