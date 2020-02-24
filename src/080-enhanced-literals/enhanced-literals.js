function createComputedProperty() {
  var f = 'full';
  var l = 'Name';

  var person = {
    first: 'Jane',
    last: 'Smith',
  };

  person[f+l] = 'Jane Smith';
  return person;
}

function createComputedMethod() {
  var f = 'full';
  var l = 'Name';

  var person = {
    first: 'Jane',
    last: 'Smith',
  };

  person[f+l] = function() {
    return this.first + ' ' + this.last;
  }
  return person;
}

function propertyValueShorthandUsage() {
  var sum = function(a, b) {
    return a + b;
  };
  var multiply = function(a, b) {
    return a * b;
  };

  return {
    sum: sum,
    multiply: multiply,
  };
}

function methodDefinitionShorthandUsage() {
  return {
    sum: function(a, b) {
      return a + b;
    },
    multiply: function(a, b) {
      return a * b;
    }
  }
}

export {
  createComputedProperty,
  createComputedMethod,
  propertyValueShorthandUsage,
  methodDefinitionShorthandUsage,
}
