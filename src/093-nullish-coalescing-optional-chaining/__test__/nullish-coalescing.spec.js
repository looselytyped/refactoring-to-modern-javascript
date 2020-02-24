import {
  buyBeer,
  fullName,
} from '../nullish-coalescing';

describe('nullish coalescing', () => {
  describe('buyBeer', () => {
    it('should return count correctly', () => {
      expect.assertions(1);
      expect(buyBeer({count: 12})).toBe(12);
    });

    it('undefined count should default to 6', () => {
      expect.assertions(1);
      expect(buyBeer({})).toBe(6);
    });

    it('null count should default to 6', () => {
      expect.assertions(1);
      expect(buyBeer({age:null})).toBe(6);
    });
  });

  describe('fullName', () => {
    it('should return name with prefix', () => {
      expect(fullName({
        firstName: "Raju",
        lastName: "Gandhi",
        prefix: "Mr"
      })).toBe("Mr Raju Gandhi")
    });

    it('should just return name if no prefix is supplied', () => {
      expect(fullName({
        firstName: "Raju",
        lastName: "Gandhi",
      })).toBe("Raju Gandhi")
    });
  });
});
