import expect from 'expect'
import Stack, {StackNode} from './Stack'

describe('Stack', () => {

  describe('StackNode()', () => {

    it('should return an object with data and null next', () => {
      const node = new StackNode(1)
      expect(node.data).toEqual(1)
      expect(node.next).toEqual(null)
    })
  })

  describe('Stack()', () => {

    describe('constructor()', () => {

      it('should return an object with null top', () => {
        const stack = new Stack()
        expect(stack.top).toEqual(null)
      })
    })

    describe('pop()', () => {

      it('should return null if no top item', () => {
        const stack = new Stack()
        expect(stack.pop()).toEqual(null)
      })

      it('should remove the top node and return its data', () => {
        const stack = new Stack()
        stack.push(1)
        stack.push(2)
        expect(stack.pop()).toEqual(2)
        expect(stack.peek()).toEqual(1)
      })
    })

    describe('push()', () => {

      it('should push a new node to top of the stack', () => {
        const stack = new Stack()
        stack.push(1)
        expect(stack.peek()).toEqual(1)
      })

      it('should return itself for chaining', () => {
        const stack = new Stack()
        const actual = stack.push(1)
        expect(actual).toEqual(stack)
      })
    })

    describe('peek()', () => {

      it('should return null if no top item', () => {
        const stack = new Stack()
        expect(stack.peek()).toEqual(null)
      })

      it('should return the top item data', () => {
        const stack = new Stack()
        stack.push(1)
        stack.push(2)
        expect(stack.peek()).toEqual(2)
      })
    })

    describe('isEmpty()', () => {

      it('should return false if not empty', () => {
        const stack = new Stack()
        stack.push(1)
        expect(stack.isEmpty()).toEqual(false)
      })

      it('should return true if empty', () => {
        const stack = new Stack()
        expect(stack.isEmpty()).toEqual(true)
      })
    })
  })
})