module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'mocha': true,
  },
  'parser': 'babel-eslint',
  'extends': 'airbnb',
  'plugins': [
    'eslint-plugin-flowtype',
  ],
  'rules': {
    'arrow-body-style': ['error', 'always'],
    'flowtype/define-flow-type': 1,
    'jsx-a11y/label-has-for': 0,
    'max-len': [1, 132, 2],
    'react/jsx-filename-extension': 0,
    'react/prefer-stateless-function': 0,
    'strict': 0,
    'no-console': ['error', { allow: ['warn', 'error'] }],
  },
  'overrides': [
    {
      'files': ['nwb.config.js'],
      'rules': {
        'eslint-global-require': 'off',
        'import/no-extraneous-dependencies': 'off',
        'max-len': 'off',
      }
    }
  ]
};
