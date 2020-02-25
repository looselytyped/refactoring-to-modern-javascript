import sayHello, {
  sayGoodbye,
  bonjour,
  italianHello as ciao,
} from './exporter.mjs';

const englishHello = sayHello('Raju');
console.log(englishHello);

const englishGoodbye = sayGoodbye('Raju');
console.log(englishGoodbye);

const frenchHello = bonjour('Raju');
console.log(frenchHello);

const italianHello = ciao('Raju');
console.log(italianHello);
