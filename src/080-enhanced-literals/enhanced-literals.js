const createComputedProperty = () => {
  const f = 'full';
  const l = 'Name';

  return {
    first: 'Jane',
    last: 'Smith',
    [f + l]: 'Jane Smith',
  };
};

const createComputedMethod = () => {
  const f = 'full';
  const l = 'Name';

  return {
    first: 'Jane',
    last: 'Smith',
    [f + l]() {
      return `${this.first} ${this.last}`;
    },
  };
};

const propertyValueShorthandUsage = () => {
  const sum = (a, b) => a + b;
  const multiply = (a, b) => a * b;

  return {
    sum,
    multiply,
  };
};

/* eslint-disable arrow-body-style */
const methodDefinitionShorthandUsage = () => {
  return {
    sum(a, b) {
      return a + b;
    },
    multiply(a, b) {
      return a * b;
    },
  };
};

export {
  createComputedProperty,
  createComputedMethod,
  propertyValueShorthandUsage,
  methodDefinitionShorthandUsage,
};
