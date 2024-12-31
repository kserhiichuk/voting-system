module.exports = {
  roots: ['<rootDir>/backend/src', '<rootDir>/frontend/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/backend/src/setupTests.js'],
};
