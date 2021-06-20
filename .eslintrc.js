module.exports = exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react', 'plugin:import/warnings'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'import'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    document: true,
    window: true,
    process: true,
    fetch: false,
  },
  rules: {
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/react-in-jsx-scope': 0,
    'react/no-unescaped-entities': 0,
    'class-methods-use-this': 0,
    'no-unused-expressions': ['error', { allowTaggedTemplates: true }],
    'react/no-unused-prop-types': 0,
    'consistent-return': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'react/prop-types': 0,
    'prettier/prettier': 'error',
    'react/destructuring-assignment': 0,
    'import/no-unresolved': 2,
    'global-require': 0,
    'react/no-array-index-key': 0,
    'no-nested-ternary': 0,
    'no-bitwise': 0,
    'no-param-reassign': 0,
    'no-empty-pattern': 0,
    'no-restricted-imports': [2, { patterns: ['../../*'] }],
    'react/jsx-props-no-spreading': 0,
    'no-return-assign': 0,
    'no-plusplus': 0,
    'no-console': 0,
  },
};