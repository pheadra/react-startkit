var webpackConfig = require('./webpack.test')

// Reference: http://karma-runner.github.io/0.12/config/configuration-file.html
module.exports = function karmaConfig (config) {
  config.set({
    frameworks: [
      // Reference: https://github.com/karma-runner/karma-mocha
      // Set framework to mocha
      'mocha'
    ],

    reporters: [
      'coverage', 'mocha'
    ],
    files: [
      // Reference: https://www.npmjs.com/package/phantomjs-polyfill
      // Needed because React.js requires bind and phantomjs does not support it
      'node_modules/phantomjs-polyfill/bind-polyfill.js',
      // Grab all files in the app folder that contain .test.
      'app/**/*.test.*'
    ],
    preprocessors: {
      // Reference: http://webpack.github.io/docs/testing.html
      // Reference: https://github.com/webpack/karma-webpack
      // Convert files with webpack and load sourcemaps
      'app/**/*.test.*': ['webpack', 'sourcemap']
    },
    browsers: [
      // Run tests using PhantomJS
      'PhantomJS'
    ],

    singleRun: true,

    // Configure code coverage reporter
    coverageReporter: {
      dir: 'build/coverage/',
      type: 'html'
    },
    mochaReporter: {
      showDiff: true
    },
    webpack: webpackConfig
  })
}