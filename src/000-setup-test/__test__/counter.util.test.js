import {
  counter,
} from '../counter.util';

describe('counter: Should increment the passed value', () => {
  it('should add 1', () => {
    expect.assertions(1);
    const result = counter(3);
    expect(result).toBe(4);
  });
});
