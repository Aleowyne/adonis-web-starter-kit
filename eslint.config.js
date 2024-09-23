import { configApp } from '@adonisjs/eslint-config'
import pluginVue from 'eslint-plugin-vue'
import tsEslint from 'typescript-eslint'

export default configApp(
  ...tsEslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
    },
  },
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['*.vue', '**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tsEslint.parser,
      },
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'any',
            normal: 'always',
            component: 'always',
          },
          svg: 'always',
          math: 'always',
        },
      ],
      'vue/singleline-html-element-content-newline': [
        'error',
        {
          ignoreWhenNoAttributes: true,
          ignoreWhenEmpty: true,
          ignores: ['Link'],
        },
      ],
    },
  }
)
