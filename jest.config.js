module.exports = {
  clearMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: false,
  modulePaths: ['<rootDir>/src/'],
  collectCoverageFrom: ['src/**/*.ts(x)?']
}
