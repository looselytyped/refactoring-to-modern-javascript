import {
  phoneMatcher,
  celebrate,

  flatten,
} from '../destructuring';

  describe('phoneMatcher', () => {
    it('should successfully splice the phone number into zip/phone', () => {
      expect.assertions(3);

      const phoneNumber = '614-555-1234';
      const result = phoneMatcher(phoneNumber);

      expect(result).toBeInstanceOf(Array);
      expect(result[0]).toBe('614');
      expect(result[1]).toBe('5551234');
    });
  });

  describe('celebrate', () => {
    it('should return a default message', () => {
      expect.assertions(1);

      const result = celebrate({});
      expect(result).toBe('Ada Lovelace was a famous Mathematician');
    });

    it('should return a celebration message', () => {
      expect.assertions(1);

      const result = celebrate({
        firstName: 'Grace',
        lastName: 'Hopper',
        profession: 'Computer Scientist',
      });
      expect(result).toBe('Grace Hopper was a famous Computer Scientist');
    });
  });

  // TODO: MAJOR CHALLENGE!!
  describe.skip('flatten', () => {
    it('should return a new array', () => {
      expect.assertions(2);

      const orig = [];
      const result = flatten(orig);
      expect(result).not.toBe(orig);
      expect(result).toStrictEqual([]);
    });

    it('should flatten an array of arrays of arrays', () => {
      expect.assertions(2);

      const orig = [1, [2, 3], 4, [5, [6, 7]], 8, 9, 10];
      const result = flatten(orig);
      expect(result).not.toBe(orig);
      expect(result).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
  });
