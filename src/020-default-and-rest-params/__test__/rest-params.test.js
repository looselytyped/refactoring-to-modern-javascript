import {
  add,
  multiplyWithFactor,
} from '../rest-params';

describe('rest-params', () => {
  describe('add', () => {
    it('should add numbers correctly', () => {
      expect.assertions(2);

      expect(add()).toBe(0);
      expect(add(1, 2, 3, 4, 5)).toBe(15);
    });
  });

  describe('multiplyWithFactor', () => {
    it('should multiple with the right factor', () => {
      // TODO: Finish this
      expect.assertions(3);

      expect(multiplyWithFactor()).toBe(1);
      expect(multiplyWithFactor(10)).toBe(10);
      expect(multiplyWithFactor(2, 2, 3)).toBe(12);
    });
  });
});
