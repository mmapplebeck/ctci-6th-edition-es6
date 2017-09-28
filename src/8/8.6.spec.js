import expect from 'expect'
import Stack from '../structures/Stack'
import {towersOfHanoi} from './8.6'

// - _ _ => _ _ -

//  -                                    -
// --- _ _ => --- - _ => _ - --- => _ _ ---

//   -
//  ---          ---               ---        ---
// ----- _ _ => ----- - _ => -----  -  _ => _  -  -----

describe('8.6', () => {
  describe('towersOfHanoi', () => {
    it('should transfer tower1 to tower3', () => {
      let start = new Stack()
      let buffer = new Stack()
      let end = new Stack()
      let expected = new Stack()

      for (let i = 10; i > 0; i--) {
        start.push(i)
        expected.push(i)
      }

      towersOfHanoi(start, buffer, end)

      expect(end).toEqual(expected)
      expect(start.isEmpty()).toEqual(true)
      expect(buffer.isEmpty()).toEqual(true)
    })
  })
})