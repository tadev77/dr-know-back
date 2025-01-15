export default {
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.js'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/services/**',
  ],
  coverageDirectory: 'coverage',
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};