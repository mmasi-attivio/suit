
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
        { pattern: 'src/**/*.js', type: 'module' },
        { pattern: 'src/**/*.jsx', type: 'module' },
        { pattern: 'tests/**/*.js', type: 'module' },
      ];
      newConfig.frameworks = ['mocha'];
      newConfig.plugins = [
        require('karma-coverage-istanbul-instrumenter'),
        require('karma-coverage-istanbul-reporter'),
        require('karma-mocha'),
      ];
      // coverage reporter generates the coverage
      newConfig.reporters = ['progress', 'coverage-istanbul'];
      newConfig.preprocessors = {
        // source files, that you wanna generate coverage for
        // do not include tests or libraries
        // (these files will be instrumented by Istanbul)
        'src/**/*.js': ['karma-coverage-istanbul-instrumenter'],
      };
      newConfig.coverageIstanbulInstrumenter = {
        esModules: true,
        plugins: [
          'asyncGenerators',
          'classProperties',
          'dynamicImport',
          'exportDefaultFrom',
          'objectRestSpread',
          'optionalCatchBinding',
          'flow',
          'jsx',
        ],
      };

      newConfig.coverageIstanbulReporter = {
        reports: ['html'],
        dir: path.join(__dirname, 'coverage'),
      };

      newConfig.browsers = ['ChromeHeadless'];
      newConfig.singleRun = true;

      return newConfig;
    },
  },
};
