import expect from 'expect'
import Node from '../structures/LinkedList'
import {removeDupes, removeDupesNoBuffer} from './2.1'

describe('2.1', () => {
  const duped = new Node(1)
  .appendToTail(2)
  .appendToTail(2)
  .appendToTail(3)
  .appendToTail(4)
  .appendToTail(4)
  .appendToTail(5)
  const expected = new Node(1)
  .appendToTail(2)
  .appendToTail(3)
  .appendToTail(4)
  .appendToTail(5)

  describe('removeDupes()', () => {
    it('should remove dupes', () => {
      const actual = removeDupes(duped)
      expect(actual).toEqual(expected)
    })
  })

  describe('removeDupesNoBuffer()', () => {
    it ('should remove dupes', () => {
      const actual = removeDupesNoBuffer(duped)
      expect(actual).toEqual(expected)
    })
  })
})