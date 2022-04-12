module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  moduleFileExtensions: ['js', 'vue', 'json'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.*\\.(vue)$': '@vue/vue2-jest',
    '.+\\.(css|scss|png|jpg|svg)$': 'jest-transform-stub',
  },
  collectCoverage: false,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue',
  ],
  testEnvironment: 'jsdom',
  setupFiles: ['./.nuxt/components/plugin.js', './jest.setup.js'],
};
