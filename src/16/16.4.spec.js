import expect from 'expect'
import won from './16.4'

describe('16.4', () => {
  it ('should return false if no winner', () => {
    const board = [
      ['x','o','x'],
      ['x','o','x'],
      ['o','x','o']
    ]
    expect(won(board)).toEqual(false)
  })

  it('should detect row win', () => {
    const board = [
      ['o','o','o'],
      ['x','o','x'],
      ['x','x','o']
    ]
    expect(won(board)).toEqual(true)
  })

  it ('should detect col win', () => {
    const board = [
      ['x','o','o'],
      ['x','o','x'],
      ['x','x','o']
    ]
    expect(won(board)).toEqual(true)
  })

  it ('should detect diagonal win', () => {
    const board = [
      ['x','o','o'],
      ['x','o','x'],
      ['o','x','o']
    ]
    expect(won(board)).toEqual(true)
  })
})
