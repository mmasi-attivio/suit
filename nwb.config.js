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
    frameworks: ['mocha', 'chai', 'chai-as-promised'],
    plugins: [
      require('karma-chai-plugins'),
    ],
  },
};
