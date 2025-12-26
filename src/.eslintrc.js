module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', 
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module', 
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, semi: true, trailingComma: 'all', printWidth: 100 }],
    'react/react-in-jsx-scope': 'off',
  },
};
