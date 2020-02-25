import {
  SuperHero,
} from '../classes';

// TODO: Remove the skip and implement this functionality
describe('class', () => {
  describe('superhero class', () => {
    it('should have a static count method', () => {
      expect.assertions(1);
      expect(SuperHero.count).toBeInstanceOf(Function);
    });

    it('should count correctly', () => {
      expect.assertions(1);
      const blackWidow = new SuperHero('Black Widow', 'weapons');
      const thor = new SuperHero('Thor', 'Mjolnir');

      expect(SuperHero.count()).toBe(2);
    });
  });

  describe('superhero instance', () => {
    let blackWidow;
    beforeEach(() => {
      blackWidow = new SuperHero('Black Widow', 'weapons');
    });


    it('should be truthy', () => {
      expect.assertions(1);
      expect(blackWidow).toBeInstanceOf(SuperHero);
    });

    it('should not have public superPower instance variable', () => {
      expect.assertions(1);
      expect(blackWidow.superPower).toBeUndefined();
    });

    it('should wield weapons correctly', () => {
      expect.assertions(1);
      expect(blackWidow.wield()).toBe("Black Widow strikes with weapons");
    });
  });
});
