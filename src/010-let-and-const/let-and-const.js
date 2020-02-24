
function simpleRefactor(randomize) {
  var fruits = ['apples', 'avocado', 'bananas', 'kiwi', 'pomegranate', 'papaya'];
  var vegetables = ['spinach', 'broccoli', 'kale', 'carrots', 'garlic', 'ginger'];
  var result = [];

  // pick two fruits, randomly if asked to
  for (var i = 0; i < 2; i++) {
    if (randomize === true) {
      result.push(fruits[Math.floor(Math.random() * Math.floor(6))]);
    } else {
      result.push(fruits[i]);
    }
  }

  // pick two vegetables, randomly if asked to
  for (var i = 0; i < 2; i++) {
    if (randomize === true) {
      result.push(vegetables[Math.floor(Math.random() * Math.floor(6))]);
    } else {
      result.push(vegetables[i]);
    }
  }

  return result;
}

function favoriteFood(animal) {
  switch (animal) {
    case 'dog':
      var fav = 'bones';
      break;
    case 'cat':
      var fav = 'fish';
      break;
    default:
      var fav = 'meat';
  }

  return fav;
}

export {
  simpleRefactor,
  favoriteFood,
};
