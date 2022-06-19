module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:prettier/recommended",
    "plugin:eslint-plugin/recommended",
    "plugin:eslint/recommended",
    "plugin:react/recommended",
    "prettier",
    "eslint:recommended"
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
