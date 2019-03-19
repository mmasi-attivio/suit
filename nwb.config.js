
const path = require('path');

module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: false,
  },
  webpack: {
    uglify: false,
  },
  karma: {
    config(config) {
      const newConfig = { ...config };
      newConfig.files = [
        'src/**/*.js',
        'src/**/*.jsx',
        'tests/**/*.js',
      ];
      // coverage reporter generates the coverage
      newConfig.reporters = ['progress', 'coverage'];
      newConfig.preprocessors = {
        // source files, that you wanna generate coverage for
        // do not include tests or libraries
        // (these files will be instrumented by Istanbul)
        'src/**/*.js': ['karma-coverage-istanbul-instrumenter'],
      };
      newConfig.coverageIstanbulInstrumenter = {
        esModules: true,
      };

      newConfig.coverageIstanbulReporter = {
        reports: ['html'],
        dir: path.join(__dirname, 'coverage'),
      };
      return newConfig;
    },
  },
};
