const path = require('path');

module.exports = wallaby => {
  require('dotenv').config();

  // Babel, jest-cli and some other modules may be located under
  // react-scripts/node_modules, so need to let node.js know about it
  process.env.NODE_PATH +=
    path.delimiter +
    path.join(__dirname, 'node_modules') +
    path.delimiter +
    path.join(__dirname, 'node_modules/react-scripts/node_modules');
  require('module').Module._initPaths();

  return {
    files: [
      'src/**/*.+(js|jsx|json|snap|css|less|sass|scss|jpg|jpeg|gif|png|svg)',
      '!src/**/*.test.js?(x)',
    ],

    tests: ['src/**/*.test.js?(x)', '!src/Storyshots.test.js'],

    env: {
      type  : 'node',
      runner: 'node',
    },

    compilers: {
      '**/*.js?(x)': wallaby.compilers.babel({
        babel  : require('babel-core'),
        presets: ['react-app'],
      }),
    },

    setup: wallaby => {
      const jestConfig = require('react-scripts/scripts/utils/createJestConfig')(p => require.resolve('react-scripts/' + p));

      delete jestConfig.transform['^.+\\.(js|jsx)$'];
      delete jestConfig.testEnvironment;

      wallaby.testFramework.configure(jestConfig);
    },

    testFramework: 'jest',
  };
};
