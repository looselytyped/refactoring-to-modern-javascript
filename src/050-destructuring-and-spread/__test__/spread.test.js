import {
  copyArray,
  createArrayFromArg,
  concatArrays,
  immutableArrayAppend,

  copyObject,
  objectMerge,
  immutableObjectAppend,
} from '../spread';


describe('rest-and-spread', () => {
  describe('copyArray', () => {
    it('should return a an empty array by default', () => {
      expect.assertions(1);

      const copy = copyArray();
      expect(copy).toStrictEqual([]);
    });

    it('should return a new array with the same entries', () => {
      expect.assertions(2);

      const orig = [12, 3, 45];
      const copy = copyArray(orig);
      expect(copy).not.toBe(orig);
      expect(copy).toStrictEqual([12, 3, 45]);
    });
  });

  describe('createArrayFromArg', () => {
    it('should return a new array with the same entries', () => {
      expect.assertions(2);

      const orig = [12, 3, 45];
      const copy = createArrayFromArg(...orig);
      expect(copy).not.toBe(orig);
      expect(copy).toStrictEqual([12, 3, 45]);
    });
  });

  describe('concatArrays', () => {
    it('should concat two arrays', () => {
      expect.assertions(3);

      const orig1 = [12, 3, 45];
      const orig2 = [5, 6, 7];
      const copy = concatArrays(orig1, orig2);
      expect(copy).not.toBe(orig1);
      expect(copy).not.toBe(orig2);

      expect(copy).toStrictEqual([12, 3, 45, 5, 6, 7]);
    });
  });

  // TODO: implement the method, then remove the .skip here to test it
  describe.skip('immutableArrayAppend', () => {
    it('should append two arrays into a new one', () => {
      expect.assertions(2);

      const orig = [1, 2, 3, 4];
      const copy = immutableArrayAppend(orig, 5, 6, 7, 8);
      expect(copy).not.toBe(orig);

      expect(copy).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });
  });

  describe('copyObject', () => {
    it('should return a an empty object by default', () => {
      expect.assertions(1);

      const copy = copyObject();
      expect(copy).toStrictEqual({});
    });

    it('should return a new object with the same key', () => {
      expect.assertions(2);

      const orig = {
        name: 'js',
        author: 'brendan',
      };
      const copy = copyObject(orig);
      expect(copy).not.toBe(orig);
      expect(copy).toStrictEqual({
        name: 'js',
        author: 'brendan',
      });
    });
  });

  describe('objectMerge', () => {
    it('should merge two object', () => {
      expect.assertions(3);

      const orig1 = {
        name: 'michelle',
        profession: 'programmer',
      };
      const orig2 = {
        profession: 'nurse',
        interests: 'gardening',
      };
      const copy = objectMerge(orig1, orig2);
      expect(copy).not.toBe(orig1);
      expect(copy).not.toBe(orig2);

      expect(copy).toStrictEqual({
        name: 'michelle',
        profession: 'nurse',
        interests: 'gardening',
      });
    });
  });

  // TODO: implement the method, then remove the .skip here to test it
  describe.skip('immutableObjectAppend', () => {
    it('should return a new fully defined object', () => {
      expect.assertions(2);

      const orig = {
        name: 'raju',
      };
      const copy = immutableObjectAppend(orig, 'profession', 'programmer');
      expect(copy).not.toBe(orig);

      expect(copy).toStrictEqual({
        name: 'raju',
        profession: 'programmer',
      });
    });
  });
});
