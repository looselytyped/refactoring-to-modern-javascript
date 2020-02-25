/* eslint-disable max-len, max-classes-per-file */
// TODO: Classes
// Implement an 'Animal' class that is constructed with a `name` and `sound`
// It should have 3 methods

// - eat() - Returns a string — like 'Pooh is eating' (where 'Pooh' is the 'name')
// - sleep() - Returns a string - like 'Pooh is sleeping'
// - toString() - Returns a string - like 'Roar! My name is Pooh.'

// Then implement two sub-classes namely Dog and Cat.
// Each of their constructor takes an ADDITIONAL argument, namely 'type'

// Dog should implment the following methods

// - bark() - Returns a string — like 'Woof' (where 'Woof' is the 'sound')
// - toString() - Returns a string that uses Animal's toString with the type — e.g 'Woof! My name is Buddy. I am a Yorkie Poodle'

// Cat should implment the following methods

// - meow() - Returns a string — like 'Meow' (where 'Meow' is the 'sound')
// - toString() - Returns a string that uses Animal's toString with the type — e.g 'Meow! My name is Busha. I am a Maine Coon'

// See the associated tests file
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  eat() {
    return `${this.name} is eating`;
  }

  sleep() {
    return `${this.name} is sleeping`;
  }

  toString() {
    return `${this.sound}! My name is ${this.name}.`;
  }
}
class Dog extends Animal {
  constructor(name, sound, type) {
    super(name, sound);
    this.type = type;
  }

  bark() {
    return this.sound;
  }

  toString() {
    return `${super.toString()} I am a ${this.type}`;
  }
}

class Cat extends Animal {
  constructor(name, sound, type) {
    super(name, sound);
    this.type = type;
  }

  meow() {
    return this.sound;
  }

  toString() {
    return `${super.toString()} I am a ${this.type}`;
  }
}

// Leave the following lines alone :)
export {
  Animal,
  Dog,
  Cat,
};
