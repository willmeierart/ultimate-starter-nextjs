module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/__tests__/__utils__/',
    '<rootDir>/__tests__/__chai_tests__/'
  ],
  verbose: true
}
