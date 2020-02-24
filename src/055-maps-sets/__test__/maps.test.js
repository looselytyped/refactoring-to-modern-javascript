import {
  areaCodeToCity,
  mapFromIterable,
  addToMap,
} from '../maps';

// TODO: Remove the skip and implement the following
describe.skip('maps', () => {
  it('areaCodeToCity: should return a map of area code to city', () => {
    expect.assertions(4);

    const m = areaCodeToCity();
    expect(m).toBeInstanceOf(Map);
    expect(m.get(614)).toBe('Ohio');
    expect(m.get(303)).toBe('Colorado');
    expect(m.get(209)).toBe('California');
  });

  it('mapFromIterable: should construct a map from iterable', () => {
    expect.assertions(4);
    const m = mapFromIterable(
      [1, 'ek'],
      [2, 'do'],
      [3, 'teen'],
      );
    expect(m).toBeInstanceOf(Map);
    expect(m.get(1)).toBe('ek');
    expect(m.get(2)).toBe('do');
    expect(m.get(3)).toBe('teen');
  });

  it('addToMap: should not add undefined key', () => {
    expect.assertions(3);

    const m = new Map([
      [614, 'Ohio'],
      [303, 'Colorado'],
      [209, 'California'],
      ]);
    const ret = addToMap(m);

    expect(ret).toBeInstanceOf(Map);
    expect(ret).not.toBe(m);
    expect([...ret.entries()]).toHaveLength(3);
  });

  it('addToMap: should only add if the key does not exist', () => {
    expect.assertions(4);

    const m = new Map([
      [614, 'Ohio'],
      [303, 'Colorado'],
      [209, 'California'],
      ]);
    const ret = addToMap(m, 808, 'Hawaii');

    expect(ret).toBeInstanceOf(Map);
    expect(ret).not.toBe(m);
    expect([...ret.entries()]).toHaveLength(4);
    expect(ret.get(808)).toBe('Hawaii');
  });

  it('addToMap: should return a new map', () => {
    expect.assertions(4);

    const m = new Map([
      [614, 'Ohio'],
      [303, 'Colorado'],
      [209, 'California'],
      ]);
    const ret = addToMap(m, 614, 'Indiana');

    expect(ret).toBeInstanceOf(Map);
    expect(ret).not.toBe(m);
    expect([...ret.entries()]).toHaveLength(3);
    expect(ret.get(614)).toBe('Ohio');
  });
});
