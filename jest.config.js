module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/__tests__/utils/',
  ],
  testURL: 'http://localhost',
  verbose: true,
  collectCoverageFrom: [
    "pages/**/*.js",
    "components/**/*.js",
    "!pages/_document.js",
    "!components/Head.js",
    "!components/___boilerplate/**/*.js",
    "!components/__assets/**/*.js",
    "!components/__hoc/**/*.js",
    "lib/redux/reducers/*.js",
    "lib/redux/actions/*.js"
  ]
}
