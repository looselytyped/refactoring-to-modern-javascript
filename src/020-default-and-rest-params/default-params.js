
function rectangleArea(x, y) {
  if (!x) x = 10;
  if (!y) y = x;

  return x * y;
}

function validTriangle(a, b) {
  if (!a) a = 10;
  if (!b) b = a;
  var c = +Math.hypot(a, b).toFixed(2);

  return [a, b, c];
}

function appendToArray(value, arr) {
  if (!arr) arr = [];
  arr.push(value);
  return arr;
}

export {
  rectangleArea,
  validTriangle,
  appendToArray,
};
