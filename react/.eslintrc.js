module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['@consenlabs-fe/eslint-config-ts', '@consenlabs-fe/eslint-config-react'],
  env: {
    jest: true,
  },
  plugins: ['@typescript-eslint'],
  parserOptions: {
    project: './tsconfig.json',
  },
}
