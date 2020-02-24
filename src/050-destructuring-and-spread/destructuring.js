function phoneMatcher(phoneNumber) {
  var PHONE_MATCH = /^(\d{3})-(\d{3})-(\d{4})$/;
  var match = PHONE_MATCH.exec(phoneNumber);
  var zip = match[1];
  var phone = match[2] + match[3];

  return [zip, phone];
}

function celebrate(obj) {
  var firstName = obj.firstName ? obj.firstName : 'Ada';
  var lastName = obj.lastName ? obj.lastName : 'Lovelace';
  var profession = obj.profession ? obj.profession : 'Mathematician';

  return `${firstName} ${lastName} was a famous ${profession}`;
}

// TODO: MAJOR CHALLENGE!!
// Write an algorith that flattens an array
// You will need destructuring in method signatues, as well as within
// the implementation, as well as spreading
// Also, look up
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
const flatten = (arr) => {

};

export {
  phoneMatcher,
  celebrate,
  flatten,
};
