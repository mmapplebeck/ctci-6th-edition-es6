import expect from 'expect'
import {fill} from 'lodash'
import {paintFill} from './8.10'

describe('8.10', () => {
  describe('paintFill', () => {
    it('should fill the whole area with specified color', () => {
      let area = [
        ['w', 'w', 'w'],
        ['w', 'r', 'r'],
        ['w', 'g', 'g']
      ]
      let expected = [
        ['b', 'b', 'b'],
        ['b', 'r', 'r'],
        ['b', 'g', 'g']
      ]
      paintFill(area, 0, 2, 'b')
      expect(area).toEqual(expected)
    })
  })
})