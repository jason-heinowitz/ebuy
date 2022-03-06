module.exports = {
  root: true,
  extends: ['airbnb', 'airbnb/hooks', 'plugin:react/recommended', 'plugin:json/recommended', 'plugin:@typescript-eslint/recommended'],
  plugins: ['react', 'json', 'react-hooks'],
  rules: {
    'react/prop-types': 0,
    'no-console': 1,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    'react/jsx-one-expression-per-line': 'off',
    'func-names': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prefer-stateless-function': 'off',
    'react/function-component-definition': 'off', // typescript buggy
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: [
          'src',
        ],
        extensions: [
          '.js', '.jsx', '.ts', '.tsx',
        ],
      },
    },
  },
};
