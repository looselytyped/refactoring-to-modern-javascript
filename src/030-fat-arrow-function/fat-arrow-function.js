
function sayHello(name) {
  if (!name) name = 'World';
  return "Hello " + name;
}

function createSession(speaker) {
  return {
    title: 'Modern JS!',
    speaker: speaker,
  };
}

function multiplier(n) {
  if (!n) n = 1;
  return function (arg) {
    return n * arg;
  };
}

export {
  sayHello,
  createSession,
  multiplier,
};
