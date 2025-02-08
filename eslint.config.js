/* eslint-disable @typescript-eslint/no-require-imports */
const typescriptEslint = require('@typescript-eslint/eslint-plugin')
const prettier = require('eslint-plugin-prettier')
const globals = require('globals')
const tsParser = require('@typescript-eslint/parser')
const js = require('@eslint/js')

const { FlatCompat } = require('@eslint/eslintrc')

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})

module.exports = [
  ...compat.extends(
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ),
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      prettier
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },

      parser: tsParser
    },

    rules: {
      'prettier/prettier': 'error'
    }
  }
]
