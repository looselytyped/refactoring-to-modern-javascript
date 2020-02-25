// TODO: Implement this
// Return a new Set with 3 entries
// with the first three letters of the alphabet
const alphabet = () => {
  const s = new Set();
  return s.add('A').add('B').add('C');
};

// You will be passed 'n' items.
// Return a set with those as the individual entries
const setFromIterable = (...args) => new Set([...args]);

// Given a set s, and a key, this should RETURN A NEW
// MAP with ALL the keys (including the new one)
// ONLY if the map does not have supplied key.
// Else just return a new Map constructed from m
const addToSet = (s, key) => {
  if (key) {
    return new Set(s).add(key);
  }
  return new Set(s);
};

export {
  alphabet,
  setFromIterable,
  addToSet,
};
