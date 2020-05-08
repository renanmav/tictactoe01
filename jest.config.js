const expoPreset = require('jest-expo/jest-preset');
const jestPreset = require('@testing-library/react-native/jest-preset');

module.exports = Object.assign(expoPreset, jestPreset, {
  setupFilesAfterEnv: ['./test/setup.ts'],
  setupFiles: [...expoPreset.setupFiles, ...jestPreset.setupFiles],
  reporters: ['default'],
  coverageReporters: ['lcov', 'html'],
});
