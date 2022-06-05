module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    ecmaVersion: 12,
    sourceType: 'module',
  },
  extends: [
    '@nuxtjs',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    'prettier',
  ],

  // add your custom rules here
  rules: {
    'prettier/prettier': 'error',
  },

  plugins: ['prettier'],
};
