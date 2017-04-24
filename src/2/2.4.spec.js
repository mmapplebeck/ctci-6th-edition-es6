import expect from 'expect'
import Node from '../structures/LinkedList'
import {partition} from './2.4'

describe('2.4', () => {

  describe('partition()', () => {

    it('should partition the linked list', () => {
      const linkedList = new Node(5)
        .appendToTail(4)
        .appendToTail(1)
        .appendToTail(3)
        .appendToTail(2)
        .appendToTail(1)
      const actual = partition(linkedList, 3)
      expect(actual.data).toBeLessThan(3)
      expect(actual.next.data).toBeLessThan(3)
      expect(actual.next.next.data).toBeLessThan(3)
    })
  })
})