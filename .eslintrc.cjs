module.exports = {
  env: {
    browser: true,
    es2021: true,
    node:true
  },
  extends: ['standard', 'eslint-config-standard-with-typescript','prettier'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint','prettier'],
    rules: {
      'prettier/prettier':'error'
  },
}
