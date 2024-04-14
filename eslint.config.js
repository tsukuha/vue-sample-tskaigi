/* eslint-disable @typescript-eslint/no-var-requires */
const eslintJS = require('@eslint/js')
const eslintVuePlugin = require('eslint-plugin-vue')
const { FlatCompat } = require('@eslint/eslintrc')
const typeScriptESLintParser = require('@typescript-eslint/parser')
const eslintConfigPrettier = require('eslint-config-prettier')
const vueESLintParser = require('vue-eslint-parser')
const typeScriptESLintPlugin = require('@typescript-eslint/eslint-plugin')
const eslintRecommended = eslintJS.configs.recommended
const vueESLintRecommended = eslintVuePlugin.configs['flat/recommended']
const compat = new FlatCompat()

module.exports = [
  {
    ignores: ['eslint.config.js', 'node_modules', '.nuxt', '.output', '.data', '.nitro', '.cache', 'dist', 'coverage'],
  },
  eslintRecommended,
  eslintConfigPrettier,
  ...compat.extends('plugin:@typescript-eslint/recommended'),
  {
    files: ['**/*.ts'],
    plugins: {
      typeScriptESLintPlugin,
    },
    rules: {
      semi: ['error', 'never', { beforeStatementContinuationChars: 'never' }],
      '@typescript-eslint/ban-ts-comment': 'off',
      'max-len': ['warn', { code: 120 }],
    },
  },
  ...[
    ...vueESLintRecommended,
    {
      files: ['**/*.vue'],
      rules: {
        semi: ['error', 'never', { beforeStatementContinuationChars: 'never' }],
        'no-undef': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        'max-len': ['warn', { code: 120 }],
        'vue/require-v-for-key': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/require-toggle-inside-transition': 'off',
      },
    },
    {
      languageOptions: {
        parser: vueESLintParser,
        parserOptions: {
          parser: typeScriptESLintParser,
          sourceType: 'module',
          project: './tsconfig.json',
          extraFileExtensions: ['.vue'],
        },
      },
    },
  ],
]
