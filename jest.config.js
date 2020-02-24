module.exports = {
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^anotherRoot/(.*)$': '<rootDir>/lib/anotherRoot/$1',
  },
  transformIgnorePatterns: [],
};
