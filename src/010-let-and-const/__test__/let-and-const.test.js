import {
  simpleRefactor,
  favoriteFood,
} from '../let-and-const';

describe('let-and-const', () => {
  describe('simpleRefactor', () => {
    it('should deterministically return fruits/vegetables', () => {
      expect.assertions(1);

      const result = simpleRefactor(false);
      expect(result).toStrictEqual(['apples', 'avocado', 'spinach', 'broccoli']);
    });
  });

  describe('favoriteFood', () => {
    it('should report the favorite food for the right animal', () => {
      expect.assertions(3);

      expect(favoriteFood('dog')).toBe('bones');
      expect(favoriteFood('cat')).toBe('fish');
      expect(favoriteFood('bear')).toBe('meat');
    });
  });
});
