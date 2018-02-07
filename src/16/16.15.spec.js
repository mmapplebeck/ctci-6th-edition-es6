import expect from 'expect'
import mastermind from './16.15'

describe('16.15', () => {
  it('should return hits and psuedohits', () => {
    expect(mastermind('RGBY', 'GGRR')).toEqual({
      hits: 1,
      pseudoHits: 1
    })
    expect(mastermind('RGBY', 'RGBY')).toEqual({
      hits: 4,
      pseudoHits: 0
    })
    expect(mastermind('RGBY', 'RBGY')).toEqual({
      hits: 2,
      pseudoHits: 2
    })
    expect(mastermind('RGBY', 'RRRR')).toEqual({
      hits: 1,
      pseudoHits: 0
    })
    expect(mastermind('RGBY', 'BBRY')).toEqual({
      hits: 1,
      pseudoHits: 2
    })
  })
})
