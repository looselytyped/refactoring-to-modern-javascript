import {
  Animal,
  Dog,
  Cat,
} from '../classes';

// TODO: Remove the skip and implement this functionality
describe.skip('class', () => {
  describe('animal', () => {
    it('should be truthy', () => {
      expect.assertions(1);
      const pooh = new Animal('Pooh', 'Roar');
      expect(pooh).toBeInstanceOf(Animal);
    });

    it('should be able to eat', () => {
      expect.assertions(1);
      const pooh = new Animal('Pooh', 'Roar');
      expect(pooh.eat()).toBe('Pooh is eating');
    });

    it('should be able to sleep', () => {
      expect.assertions(1);
      const pooh = new Animal('Pooh', 'Roar');
      expect(pooh.sleep()).toBe('Pooh is sleeping');
    });

    it('should stringify correctly', () => {
      expect.assertions(1);
      const pooh = new Animal('Pooh', 'Roar');
      expect(pooh.toString()).toBe('Roar! My name is Pooh.');
    });
  });

  describe('dog', () => {
    it('should be truthy', () => {
      expect.assertions(2);
      const buddy = new Dog('Buddy', 'Woof', 'Yorkie Poodle');
      expect(buddy).toBeInstanceOf(Animal);
      expect(buddy).toBeInstanceOf(Dog);
    });

    it('should be able to bark', () => {
      expect.assertions(1);
      const buddy = new Dog('Buddy', 'Woof', 'Yorkie Poodle');
      expect(buddy.bark()).toBe('Woof');
    });

    it('should stringify correctly', () => {
      expect.assertions(1);
      const buddy = new Dog('Buddy', 'Woof', 'Yorkie Poodle');
      expect(buddy.toString()).toBe('Woof! My name is Buddy. I am a Yorkie Poodle');
    });
  });

  describe('cat', () => {
    it('should be truthy', () => {
      expect.assertions(2);
      const busha = new Cat('Busha', 'Meow', 'Maine Coon');
      expect(busha).toBeInstanceOf(Animal);
      expect(busha).toBeInstanceOf(Cat);
    });

    it('should be able to meow', () => {
      expect.assertions(1);
      const busha = new Cat('Busha', 'Meow', 'Maine Coon');
      expect(busha.meow()).toBe('Meow');
    });

    it('should stringify correctly', () => {
      expect.assertions(1);
      const busha = new Cat('Busha', 'Meow', 'Maine Coon');
      expect(busha.toString()).toBe('Meow! My name is Busha. I am a Maine Coon');
    });
  });
});
