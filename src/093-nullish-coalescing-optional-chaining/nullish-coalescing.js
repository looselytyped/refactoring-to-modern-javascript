
function buyBeer(pack) {
  var count = pack.count;
  if(count === null || count === undefined) {
    return 6;
  }
  return count;
}

function fullName(obj) {
  var first = obj.firstName;
  var last = obj.lastName;
  var prefix = obj.prefix;

  if(prefix === null || prefix === undefined) {
    prefix = '';
  }

  return (prefix + " " + first + " " + last).trim();
}

export {
  buyBeer,
  fullName,
};
