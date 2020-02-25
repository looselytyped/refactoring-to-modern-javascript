/* eslint-disable no-restricted-syntax, prefer-arrow-callback */
function rectangleArea(x = 10, y = x) {
  return x * y;
}

function validTriangle(a = 10, b = a) {
  const c = +Math.hypot(a, b).toFixed(2);

  return [a, b, c];
}

function appendToArray(value, arr = []) {
  arr.push(value);
  return arr;
}


export {
  rectangleArea,
  validTriangle,
  appendToArray,
};
