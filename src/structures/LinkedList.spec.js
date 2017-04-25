import expect from 'expect'
import Node from './LinkedList'

describe('Node', () => {

  describe('constructor()', () => {

    const node = new Node(1)

    it('should have data', () => {
      expect(node.data).toEqual(1)
    })

    it('should have null next', () => {
      expect(node.next).toEqual(null)
    })
  })

  describe('appendToTail()', () => {

    const node = new Node(1).appendToTail(2)

    it('should append a new node with data', () => {
      expect(node.next.data).toEqual(2)
    })

    it('should return itself for chaining', () => {
      expect(node).toBeA(Node)
    })
  })

  describe('setNext()', () => {

    it('should set the next node', () => {
      let node = new Node(1)
      const nextNode = new Node(2)
      node.setNext(nextNode)
      expect(node.next).toEqual(nextNode)
    })
  })
})