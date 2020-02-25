/* eslint-disable prefer-template, object-shorthand, arrow-body-style */
const sayHello = (name = 'World') => 'Hello ' + name;

const createSession = (speaker) => {
  return {
    title: 'Modern JS!',
    speaker: speaker,
  };
};

const multiplier = (n = 1) => (arg) => n * arg;

export {
  sayHello,
  createSession,
  multiplier,
};
