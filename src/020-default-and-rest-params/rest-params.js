function add(...nums) {
  return nums.reduce(function sum(acc, n) {
    return acc + n;
  }, 0);
}

function multiplyWithFactor(factor = 1, ...args) {
  let result = factor;
  for (const n of args) {
    result *= n;
  }
  return result;
}

export {
  add,
  multiplyWithFactor,
};
