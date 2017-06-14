import expect from 'expect'
import Node from '../structures/LinkedList'
import {getKthToLast} from './2.2'

describe('2.2', () => {

  describe('getKthToLast()', () => {

    const linkedList = new Node(1)
      .appendToTail(2)
      .appendToTail(3)
      .appendToTail(4)
      .appendToTail(5)

    it('should return the kth to last data', () => {
      const actual = getKthToLast(linkedList, 2)
      expect(actual).toEqual(4)
    })

    it('should return null if too few items', () => {
      const actual = getKthToLast(linkedList, 10)
      expect(actual).toEqual(null)
    })
  })
})