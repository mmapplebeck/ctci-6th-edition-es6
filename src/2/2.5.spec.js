import expect from 'expect'
import Node from '../structures/LinkedList'
import {sumLists} from './2.5'

describe('2.5', () => {

  describe('sumLists()', () => {

    it('should sum the lists', () => {

      // 123
      const first = new Node(3)
        .appendToTail(2)
        .appendToTail(1)

      // 9999
      const second = new Node(9)
        .appendToTail(9)
        .appendToTail(9)
        .appendToTail(9)

      //    123
      // + 9999
      //-------
      //  10122 

      const expected = new Node(2)
        .appendToTail(2)
        .appendToTail(1)
        .appendToTail(0)
        .appendToTail(1)

      const actual = sumLists(first, second)

      expect(actual).toEqual(expected)
    })
  })
})