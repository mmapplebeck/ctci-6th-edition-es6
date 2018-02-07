import expect from 'expect'
import livingPeople from './16.10'

describe('16.10', () => {
  it('should return the year with the most people alive', () => {
    class Person {
      constructor(birth, death) {
        this.birth = birth
        this.death = death
      }
    }
    const people = [
      new Person(1900, 1950),
      new Person(1905, 1949),
      new Person(1952, 1990)
    ]
    expect(livingPeople(people, 1900, 1990)).toEqual(1905)
  })
})
