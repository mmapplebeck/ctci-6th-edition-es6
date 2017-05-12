import expect from 'expect'
import Node from '../structures/LinkedList'
import Queue from '../structures/Queue'
import {Animal, Cat, Dog, AnimalShelter} from './3.6'

describe('3.6', () => {

  describe('Animal', () => {

    it('should return an object with a timestamp', () => {
      const timestamp = Date.now()
      const animal = new Animal()
      expect(animal.timestamp).toEqual(timestamp)
    })
  })

  describe('Cat', () => {

    it('should be an Animal', () => {
      const cat = new Cat()
      expect(cat).toBeA(Animal)
    })
  })

  describe('Dog', () => {

    it('should be an Animal', () => {
      const dog = new Dog()
      expect(dog).toBeA(Animal)
    })
  })

  describe('AnimalShelter', () => {

    describe('constructor()', () => {

      it('should return an object with cats queue and dogs queue', () => {
        const shelter = new AnimalShelter()
        expect(shelter.cats).toBeA(Queue)
        expect(shelter.cats.isEmpty()).toBe(true)
        expect(shelter.dogs).toBeA(Queue)
        expect(shelter.dogs.isEmpty()).toBe(true)
      })
    })

    describe('enqueue()', () => {

      it('should add Cat to cats queue', () => {
        const shelter = new AnimalShelter()
        const cat = new Cat()
        shelter.enqueue(cat)
        expect(shelter.cats.peek()).toEqual(cat)
      })

      it('should add Dog to dogs queue', () => {
        const shelter = new AnimalShelter()
        const dog = new Dog()
        shelter.enqueue(dog)
        expect(shelter.dogs.peek()).toEqual(dog)
      })
    })

    describe('dequeueAny()', () => {
      const shelter = new AnimalShelter()
      let cat
      let dog

      before(done => {
        cat = new Cat()
        setTimeout(() => {
          dog = new Dog()
          shelter.enqueue(cat)
          shelter.enqueue(dog)
          done()
        }, 100)
      })

      it('should remove and return the oldest animal', () => {
        expect(shelter.dequeueAny()).toEqual(cat)
      })

      it('should remove from appropriate cats or dogs queue', () => {
        expect(shelter.cats.isEmpty()).toEqual(true)
        expect(shelter.dogs.peek()).toEqual(dog)
      })
    })

    describe('dequeueCat()', () => {
      const shelter = new AnimalShelter()
      const cat1 = new Cat()
      const cat2 = new Cat()
      shelter.enqueue(new Dog())
      shelter.enqueue(new Dog())
      shelter.enqueue(cat1)
      shelter.enqueue(new Dog())
      shelter.enqueue(cat2)

      it('should dequeue the oldest cat', () => {
        let cat = shelter.dequeueCat()
        expect(cat).toEqual(cat1)
        cat = shelter.dequeueCat()
        expect(cat).toEqual(cat2)
      })

      it('should remove from the cat queue', () => {
        expect(shelter.cats.isEmpty()).toEqual(true)
      })
    })

    describe('dequeueDog()', () => {
      const shelter = new AnimalShelter()
      const dog1 = new Dog()
      const dog2 = new Dog()
      const dog3 = new Dog()
      shelter.enqueue(dog1)
      shelter.enqueue(dog2)
      shelter.enqueue(new Cat())
      shelter.enqueue(dog3)
      shelter.enqueue(new Cat())

      it('should dequeue the oldest dog', () => {
        let dog = shelter.dequeueDog()
        expect(dog).toEqual(dog1)
        dog = shelter.dequeueDog()
        expect(dog).toEqual(dog2)
        dog = shelter.dequeueDog()
        expect(dog).toEqual(dog3)
      })

      it('should remove from the dogs queue', () => {
        expect(shelter.dogs.isEmpty()).toEqual(true)
      })
    })
  })
})