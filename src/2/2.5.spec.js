import expect from 'expect'
import Node from '../structures/LinkedList'
import * as funcs from './2.5'

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

      const actual = funcs.sumLists(first, second)

      expect(actual).toEqual(expected)
    })
  })

  describe('getLength()', () => {

    it('should get the length of the list', () => {
      const list = new Node(1)
        .appendToTail(2)
        .appendToTail(3)

      expect(funcs.getLength(list)).toEqual(3)
    })
  })

  describe('padList()', () => {

    it('should pad the list with 0 n times', () => {
      const list = new Node(1)
      const expected = new Node(0)
        .appendToTail(0)
        .appendToTail(1)
      const actual = funcs.padList(list, 2)
      expect(actual).toEqual(expected)
    })
  })

  describe('appendToList()', () => {

    it('should append a node to the list', () => {
      const list = new Node(1)
      const expected = new Node(2).appendToTail(1)
      const actual = funcs.appendToList(list, 2)
      expect(actual).toEqual(expected)
    })
  })

  describe('getPartialSum()', () => {

    it('should handle null input and return defaults', () => {
      const expected = {
        list: null,
        carry: 0
      }
      const actual = funcs.getPartialSum(null, null)
      expect(actual).toEqual(expected)
    })

    it('should return list and carry', () => {
      const expected = {
        list: new Node(1),
        carry: 1
      }
      const actual = funcs.getPartialSum(new Node(9), new Node(2))
      expect(actual).toEqual(expected)
    })
  })

  describe('sumListsForward()', () => {

    it('should sum the lists', () => {

      // 123
      const first = new Node(1)
        .appendToTail(2)
        .appendToTail(3)

      // 9898
      const second = new Node(9)
        .appendToTail(8)
        .appendToTail(9)
        .appendToTail(8)

      //   0123
      // + 9898
      //-------
      //  10021 

      const expected = new Node(1)
        .appendToTail(0)
        .appendToTail(0)
        .appendToTail(2)
        .appendToTail(1)

      const actual = funcs.sumListsForward(first, second)

      expect(actual).toEqual(expected)
    })
  })
})