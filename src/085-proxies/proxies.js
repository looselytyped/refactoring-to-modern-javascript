/* eslint-disable no-extend-native, no-console */
Object.defineProperty(Array.prototype, 'equals', { // <1>
  value(other) {
    if (!other) return false;
    if (!Array.isArray(other)) return false;
    if (this.length !== other.length) return false;

    const [fMe, ...rMe] = this;
    const [fOther, ...rOther] = other;

    if (fMe === fOther) {
      return true;
    }
    if ((rMe.length === 0) && (rOther.length === 0)) {
      return true;
    }
    return rMe.equals(rOther);
  },
  enumerable: false,
  configurable: true,
});

const first = [1, 2, 3, [4, 5]];
const second = [1, 2, 3, [4, 5]];
const third = [1, 2, 3];

export {
  first,
  second,
  third,
};
