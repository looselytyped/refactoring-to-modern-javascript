import {
  alphabet,
  setFromIterable,
  addToSet,
} from '../sets';

// TODO: Remove the skip and implement the following
describe('sets', () => {
  it('alphabet: should return a set of alphabets', () => {
    expect.assertions(4);

    const s = alphabet();
    expect(s).toBeInstanceOf(Set);
    expect(s.has('A')).toBe(true);
    expect(s.has('B')).toBe(true);
    expect(s.has('C')).toBe(true);
  });

  it('setFromIterable: should return a set with the supplied elements', () => {
    expect.assertions(2);

    const s = setFromIterable('A', 'B', 'C', 'D', 'E');

    expect(s).toBeInstanceOf(Set);
    expect([...s.keys()]).toStrictEqual(['A', 'B', 'C', 'D', 'E']);
  });

  it('addToSet: should not add undefined key', () => {
    expect.assertions(3);

    const s = new Set(['A', 'B', 'C']);
    const ret = addToSet(s);

    expect(ret).toBeInstanceOf(Set);
    expect(ret).not.toBe(s);
    expect([...ret.keys()]).toHaveLength(3);
  });

  it('addToSet: should only add if the key does not exist', () => {
    expect.assertions(3);

    const s = new Set(['A', 'B', 'C']);
    const ret = addToSet(s, 'D');

    expect(ret).toBeInstanceOf(Set);
    expect(ret).not.toBe(s);
    expect([...ret.keys()]).toHaveLength(4);
  });
});
