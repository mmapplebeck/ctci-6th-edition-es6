import expect from 'expect'
import {Element, Attribute, encode} from './16.12'

describe('16.12', () => {
  it('should encode the element given mappings', () => {
    const child1 = new Element('child1', [new Attribute('b', 'value2'), new Attribute('c', 'value3')])
    const child2 = new Element('child2', [new Attribute('c', 'value4'), new Attribute('d', 'value5')])
    const parent = new Element('parent', [new Attribute('a', 'value1')], [child1, child2])
    const mappings = {
      'parent': 1,
      'a': 2,
      'child1': 3,
      'b': 4,
      'c': 5,
      'child2': 6,
      'd': 7
    }
    expect(encode(parent, mappings)).toEqual('1 2 value1 0 3 4 value2 5 value3 0 6 5 value4 7 value5 0 0')
  })
})
