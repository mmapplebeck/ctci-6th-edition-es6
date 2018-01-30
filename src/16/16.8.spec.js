import expect from 'expect'
import englishInt from './16.8'

describe('16.8', () => {
  it('should return english representation of integer', () => {
    expect(englishInt(0)).toEqual('Zero')
    expect(englishInt(6)).toEqual('Six')
    expect(englishInt(10)).toEqual('Ten')
    expect(englishInt(17)).toEqual('Seventeen')
    expect(englishInt(20)).toEqual('Twenty')
    expect(englishInt(100)).toEqual('One Hundred')
    expect(englishInt(101)).toEqual('One Hundred One')
    expect(englishInt(150)).toEqual('One Hundred Fifty')
    expect(englishInt(415)).toEqual('Four Hundred Fifteen')
    expect(englishInt(1000)).toEqual('One Thousand')
    expect(englishInt(1589)).toEqual('One Thousand Five Hundred Eighty Nine')
    expect(englishInt(10003)).toEqual('Ten Thousand Three')
    expect(englishInt(10992)).toEqual('Ten Thousand Nine Hundred Ninety Two')
    expect(englishInt(105080)).toEqual('One Hundred Five Thousand Eighty')
    expect(englishInt(2576291)).toEqual('Two Million Five Hundred Seventy Six Thousand Two Hundred Ninety One')
  })
})
