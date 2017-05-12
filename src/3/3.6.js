import Queue from '../structures/Queue'
import Node from '../structures/LinkedList'

export class Animal {
  constructor() {
    this.timestamp = Date.now()
  }
}
export class Cat extends Animal {}
export class Dog extends Animal {}

export class AnimalShelter {
  constructor() {
    this.cats = new Queue()
    this.dogs = new Queue()
  }
  enqueue(animal) {
    if (animal instanceof Cat) {
      this.cats.add(animal)
    } else {
      this.dogs.add(animal)
    }
  }
  dequeueAny() {
    if (this.cats.isEmpty() && this.dogs.isEmpty()) return null
    if (this.cats.isEmpty() && !this.dogs.isEmpty()) return this.dogs.remove()
    if (this.dogs.isEmpty() && !this.cats.isEmpty()) return this.cats.remove()
    return this.cats.peek().timestamp <= this.dogs.peek().timestamp ? this.cats.remove() : this.dogs.remove()
  }
  dequeueCat() {
    return this.cats.remove()
  }
  dequeueDog() {
    return this.dogs.remove()
  }
}