import {
  rectangleArea,
  validTriangle,
  appendToArray,
} from '../default-params';

describe('default-params', () => {
  describe('rectangleArea', () => {
    it('should correctly calculate area correctly', () => {
      expect.assertions(3);

      expect(rectangleArea()).toBe(100);
      expect(rectangleArea(2)).toBe(4);
      expect(rectangleArea(2, 4)).toBe(8);
    });
  });

  describe('validTriangle', () => {
    it('should correctly construct a triangle', () => {
      expect.assertions(3);

      expect(validTriangle()).toStrictEqual([10, 10, 14.14]);
      expect(validTriangle(2)).toStrictEqual([2, 2, 2.83]);
      expect(validTriangle(2, 4)).toStrictEqual([2, 4, 4.47]);
    });
  });

  describe('appendToArray', () => {
    it('should append correctly', () => {
      expect.assertions(2);

      expect(appendToArray(1)).toStrictEqual([1]);
      expect(appendToArray(1, [2, 3, 4])).toStrictEqual([2, 3, 4, 1]);
    });
  });
});
