const sayHello = (name) => `Hello ${name}!`;
const sayGoodbye = (name) => `Goodbye ${name}!`;

const frenchHello = (name) => `Bonjour ${name}!`;
const italianHello = (name) => `Ciao ${name}!`;

export default sayHello;
export {
  sayGoodbye,
  frenchHello as bonjour,
  italianHello,
}
