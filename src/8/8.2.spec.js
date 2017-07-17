import expect from 'expect'
import {findPath} from './8.2'

describe('8.2', () => {

  describe('findPath()', () => {

    it('should find a path through the grid', () => {

      const grid = [
        [1, 1, 1, 0, 1],
        [1, 1, 1, 1, 0],
        [1, 1, 0, 1, 0],
        [1, 1, 1, 0, 1],
        [1, 1, 1, 1, 1]
      ]

      expect(findPath(grid)).toEqual(['r', 'd', 'd', 'd', 'r', 'd', 'r', 'r'])
    })
  })
})