import expect from 'expect'
import BinaryTreeNode from './4.11'

describe('4.11', () => {

  describe('BinaryTreeNode', () => {

    describe('constructor()', () => {

      it('should set the default properties', () => {
        let tree = new BinaryTreeNode(1)
        expect(tree.data).toEqual(1)
        expect(tree.size).toEqual(1)
        expect(tree.left).toEqual(null)
        expect(tree.right).toEqual(null)
      })
    })

    describe('insert()', () => {

      it('should insert lesser or equal items to the left and greater items to the right', () => {
        //     3
        //   2   4
        // 0   3
        //   1
        let node = new BinaryTreeNode(3)
        node.insert(2)
        node.insert(4)
        node.insert(0)
        node.insert(1)
        node.insert(3)
        expect(node.left.data).toEqual(2)
        expect(node.right.data).toEqual(4)
        expect(node.left.left.data).toEqual(0)
        expect(node.left.left.right.data).toEqual(1)
        expect(node.left.right.data).toEqual(3)
      })

      it('should update size', () => {
        let node = new BinaryTreeNode(3)
        expect(node.size).toEqual(1)
        node.insert(2)
        expect(node.left.size).toEqual(1)
        expect(node.size).toEqual(2)
        node.insert(4)
        expect(node.right.size).toEqual(1)
        expect(node.size).toEqual(3)
        node.insert(0)
        expect(node.left.size).toEqual(2)
        expect(node.left.left.size).toEqual(1)
        expect(node.size).toEqual(4)
      })
    })

    describe('_getRandomIndex', () => {
      let randomSpy = expect.spyOn(Math, 'random').andReturn(0.5)
      let tree = new BinaryTreeNode(2)
      expect(tree._getRandomIndex()).toEqual(0)
      tree.insert(1)
      expect(tree._getRandomIndex()).toEqual(1)
      tree.insert(3)
      expect(tree._getRandomIndex()).toEqual(1)
      tree.insert(4)
      expect(tree._getRandomIndex()).toEqual(2)
    })

    describe('getRandom()', () => {
      let tree = new BinaryTreeNode(2)
      tree.insert(1)
      tree.insert(3)
      let getRandomIndexSpy = expect.spyOn(tree, '_getRandomIndex').andReturn(0)
      expect(tree.getRandom()).toEqual(tree.left)
      getRandomIndexSpy.andReturn(1)
      expect(tree.getRandom()).toEqual(tree)
      getRandomIndexSpy.andReturn(2)
      expect(tree.getRandom()).toEqual(tree.right)
    })
  })
})