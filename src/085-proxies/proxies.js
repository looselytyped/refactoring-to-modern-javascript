const equals = function (other) {
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
};

const comparableArray = (arr) => {
  const handler = {
    get(target, property) {
      if (property === 'equals') {
        return equals;
      }
      return Reflect.get(target, property);
    },
  };
  return new Proxy(arr, handler);
};

const first = comparableArray([1, 2, 3, [4, 5]]);
const second = comparableArray([1, 2, 3, [4, 5]]);
const third = comparableArray([1, 2, 3]);

export {
  first,
  second,
  third,
};
