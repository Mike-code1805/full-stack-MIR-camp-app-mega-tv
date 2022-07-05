/** @type {import('@jest/types').Config.InitialOptionsTsJest} */
module.exports = {
  verbose: true,
  preset: 'ts-jest',
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/node_modules/**'],
  coverageReporters: ['json', 'html'],
  collectCoverage: false,
};
