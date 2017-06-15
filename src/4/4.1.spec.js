import expect from 'expect'
import {pathExistsDFS, pathExistsBFS} from './4.1'
import {Node} from '../structures/Graph'

describe('4.1', () => {

  const testPathExists = fn => {
    it('should return true if path exists between nodes', () => {
      let node1 = new Node('1')
      let node2 = new Node('2')
      let node3 = new Node('3')
      let node4 = new Node('4')
      let node5 = new Node('5')
      node1.children.push(node2)
      node1.children.push(node3)
      node2.children.push(node4)
      node3.children.push(node5)
      expect(fn(node1, node5)).toEqual(true)
    })

    it('should return true if path does not exist between nodes', () => {
      let node1 = new Node('1')
      let node2 = new Node('2')
      let node3 = new Node('3')
      let node4 = new Node('4')
      node1.children.push(node2)
      node2.children.push(node3)
      node3.children.push(node1)
      expect(fn(node1, node4)).toEqual(false)
    })
  }

  describe('pathExistsDFS()', () => {
    testPathExists(pathExistsDFS)
  })

  describe('pathExistsBFS()', () => {
    testPathExists(pathExistsBFS)
  })
})