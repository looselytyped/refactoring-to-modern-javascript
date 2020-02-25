/* eslint-disable no-plusplus */
function simpleRefactor(randomize) {
  const fruits = ['apples', 'avocado', 'bananas', 'kiwi', 'pomegranate', 'papaya'];
  const vegetables = ['spinach', 'broccoli', 'kale', 'carrots', 'garlic', 'ginger'];
  const result = [];

  // pick two fruits, randomly if asked to
  for (let i = 0; i < 2; i++) {
    if (randomize === true) {
      result.push(fruits[Math.floor(Math.random() * Math.floor(6))]);
    } else {
      result.push(fruits[i]);
    }
  }

  // pick two vegetables, randomly if asked to
  for (let i = 0; i < 2; i++) {
    if (randomize === true) {
      result.push(vegetables[Math.floor(Math.random() * Math.floor(6))]);
    } else {
      result.push(vegetables[i]);
    }
  }

  return result;
}

function favoriteFood(animal) {
  let fav;
  switch (animal) {
    case 'dog':
      fav = 'bones';
      break;
    case 'cat':
      fav = 'fish';
      break;
    default:
      fav = 'meat';
  }

  return fav;
}

export {
  simpleRefactor,
  favoriteFood,
};
