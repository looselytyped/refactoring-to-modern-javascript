
function buyBeer({count}) {
  return count ?? 6;
}

function fullName({
  firstName,
  lastName,
  prefix,
}) {
  prefix = prefix ?? '';
  return (prefix + " " + firstName + " " + lastName).trim();
}

export {
  buyBeer,
  fullName,
};

