import {
  getAge,
  getAgeOrDefault,
} from '../optional-chaining';

describe('optional chaining', () => {
  describe('getAge', () => {
    it('should return the age if specified', () => {
      expect.assertions(1);
      expect(getAge({profile: {age:12}})).toBe(12);
    });

    it('should return undefined if there is no profile', () => {
      expect.assertions(1);
      expect(getAge({})).toBeUndefined();
    });
  });

  describe('getAgeOrDefault', () => {
    it('should return the age if specified', () => {
      expect.assertions(1);
      expect(getAgeOrDefault({profile: {age:12}})).toBe(12);
    });

    it('should return default if there is no profile', () => {
      expect.assertions(1);
      expect(getAgeOrDefault({})).toBe(18);
    });

    it('should return default if there is no age', () => {
      expect.assertions(1);
      expect(getAgeOrDefault({profile:{}})).toBe(18);
    });
  });
});
