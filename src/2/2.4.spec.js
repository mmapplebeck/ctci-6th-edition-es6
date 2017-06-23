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

      const expected = new Node(1)
        .appendToTail(2)
        .appendToTail(1)
        .appendToTail(5)
        .appendToTail(4)
        .appendToTail(3)

      expect(partition(linkedList, 3)).toEqual(expected)
    })
  })
})