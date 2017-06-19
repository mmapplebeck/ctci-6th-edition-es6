import expect from 'expect'
import Graph, {Node as GraphNode} from '../structures/Graph'
import * as all from './4.7'

describe('4.7', () => {

  describe('findBuildOrder()', () => {

    //  ->a->
    // e---->f->b
    //  ->c->
    //
    // d->g
    //
    // (e, f), (e, a), (e, c), (a, f), (c, f), (f, b), (d, g)

    it('should return the correct build order', () => {
      const projectNames = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
      const dependencies = [['e', 'f'], ['e', 'a'], ['e', 'c'], ['a', 'f'], ['c', 'f'], ['f', 'b'], ['d', 'g']]
      const expected = ['d', 'e', 'g', 'a', 'c', 'f', 'b']
      
      expect(all.findBuildOrder(projectNames, dependencies)).toEqual(expected)
    })
  })
})