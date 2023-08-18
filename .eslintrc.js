module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'semi': ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'no-prototype-builtins': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  overrides: [
    {
      files: [
        'src/*.ts',
        'test/e2e/*.ts'
      ]
    }
  ]
}
