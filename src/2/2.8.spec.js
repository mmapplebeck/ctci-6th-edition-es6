import expect from 'expect'
import Node from '../structures/LinkedList'
import {getLoopingNode, getLoopSize} from './2.8'

describe('2.8', () => {

  let list = new Node(1)
  let loopingNode = new Node(2).appendToTail(3)
  list.next = loopingNode
  loopingNode.next = list
  // 1 -> 2 -> 3
  //      |    |
  //       ----

  describe('getLoopSize()', () => {

    it('should return the length of the loop', () => {
      expect(getLoopSize(list, loopingNode)).toEqual(2)
    })
  })

  describe('getLoopingNode()', () => {

    it('should return null if list does not loop', () => {
      const list = new Node(1).appendToTail(2).appendToTail(3)
      expect(getLoopingNode(list)).toEqual(null)
    })

    it('should return the looping node', () => {
      expect(getLoopingNode(list)).toEqual(loopingNode)
    })
  })
})