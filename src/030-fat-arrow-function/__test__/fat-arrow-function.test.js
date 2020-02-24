import {
  sayHello,
  createSession,
  multiplier,
} from '../fat-arrow-function';

describe('fat-arrow-functions', () => {
  describe('sayHello', () => {
    it('should say hello', () => {
      expect.assertions(2);

      expect(sayHello()).toBe('Hello World');
      expect(sayHello('Raju')).toBe('Hello Raju');
    });
  });

  describe('createSession', () => {
    it('should return a valid object', () => {
      expect.assertions(1);

      expect(createSession('Raju')).toStrictEqual({
        title: 'Modern JS!',
        speaker: 'Raju',
      });
    });
  });

  describe('multiplier', () => {
    it('should return a multiplier function with defaults', () => {
      expect.assertions(2);

      const ret = multiplier();
      expect(ret).toBeInstanceOf(Function);
      expect(ret(2)).toBe(2);
    });

    it('should return a multiplier function', () => {
      expect.assertions(2);

      const ret = multiplier(2);
      expect(ret).toBeInstanceOf(Function);
      expect(ret(2)).toBe(4);
    });
  });
});
