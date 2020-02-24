import {
  first,
  second,
  third,
} from '../proxies';

describe('proxies', () => {
  test('should have the equals method', () => {
    expect.assertions(3);

    expect(first.equals).toBeInstanceOf(Function);
    expect(second.equals).toBeInstanceOf(Function);
    expect(third.equals).toBeInstanceOf(Function);
  });

  test('two arrays that are equal should return true', () => {
    expect.assertions(1);

    expect(first.equals(second)).toBe(true);
  });

  test('two arrays that are NOT equal should return false', () => {
    expect.assertions(1);

    expect(first.equals(third)).toBe(false);
  });
});
