const { join } = require('path');

module.exports = {
  rootDir: './',
  testRegex: '.test.ts$',
  coverageDirectory: join(__dirname, 'coverage'),
  // globals: {
  //   'ts-jest': {
  //     diagnostics: false,
  //   },
  // },
  coverageProvider: 'v8',
  moduleFileExtensions: ['js', 'json', 'ts'],
  modulePathIgnorePatterns: ['<rootDir>/src/config/'],
  transform: {
    '^.+\\.(t)s$': ['ts-jest', { diagnostics: false }],
  },
  testEnvironment: 'node',
  testTimeout: 15000,
};
