module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'prettier'],
  env: { node: true },
  rules: {
    'prettier/prettier': 'error',
  },
  overrides: [
    {
      files: ['test/**/*.js'],
      env: { mocha: true },
    },
  ],
};
