import expect from 'expect'
import Queue, {QueueNode} from './Queue'

describe('Queue', () => {

  describe('QueueNode()', () => {

    it('should return an object with data and null next', () => {
      const node = new QueueNode(1)
      expect(node.data).toEqual(1)
      expect(node.next).toEqual(null)
    })
  })

  describe('Queue()', () => {

    describe('constructor()', () => {
      
      it('should return an object with null first and null last', () => {
        const queue = new Queue()
        expect(queue.first).toEqual(null)
        expect(queue.last).toEqual(null)
      })
    })

    describe('add()', () => {

      it('should add a new item to the end of the queue', () => {
        const queue = new Queue()
        queue.add(1)
        expect(queue.first.data).toEqual(1)        
        expect(queue.last.data).toEqual(1)
        queue.add(2)
        expect(queue.first.data).toEqual(1)
        expect(queue.last.data).toEqual(2)
      })
    })

    describe('remove()', () => {

      it('should remove first item from queue and return its data', () => {
        const queue = new Queue()
        queue.add(1)
        queue.add(2)
        expect(queue.remove()).toEqual(1)
        expect(queue.remove()).toEqual(2)
      })

      it('should return null if queue is empty', () => {
        const queue = new Queue()
        expect(queue.remove()).toEqual(null)
      })
    })

    describe('peek()', () => {

      it('should return the first item in the queue', () => {
        const queue = new Queue()
        queue.add(1)
        expect(queue.peek()).toEqual(1)
        queue.add(2)
        expect(queue.peek()).toEqual(1)
        queue.remove()
        expect(queue.peek()).toEqual(2)
      })

      it('should return null if queue is empty', () => {
        const queue = new Queue()
        expect(queue.peek()).toEqual(null)
      })
    })

    describe('isEmpty()', () => {

      it('should return false if queue is not empty', () => {
        const queue = new Queue()
        queue.add(1)
        expect(queue.isEmpty()).toEqual(false)
      })

      it('should return true if queue is empty', () => {
        const queue = new Queue()
        expect(queue.isEmpty()).toEqual(true)
      })
    })
  })
})