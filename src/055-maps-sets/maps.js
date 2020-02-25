// Return a map with 3 entries
// 614 -> 'Ohio'
// 303 -> 'Colorado'
// 209 -> 'California'
const areaCodeToCity = () => {
  const m = new Map();
  return m.set(614, 'Ohio')
    .set(303, 'Colorado')
    .set(209, 'California');
};

// TODO: Implement this
// You will be passed an ARRAY of two-item
// tuples, like so [[1, 'ek'], [2, 'do'] ... ]
// Return a map with those as the individual entries
const mapFromIterable = (...keyValuePairs) => new Map(keyValuePairs);

// Given a map m, and a key and value, this should RETURN A NEW
// MAP with ALL the keys (including the new one)
// ONLY if the map does NOT have supplied key.
// Else just return a new Map constructed from m
const addToMap = (m, key, value) => {
  if (key && !m.has(key)) {
    return new Map([
      ...m.entries(),
      [key, value],
    ]);
  }
  return new Map(m);
};

export {
  areaCodeToCity,
  mapFromIterable,
  addToMap,
};
