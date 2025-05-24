import js from '@eslint/js'
import globals from 'globals'
import pluginReact from 'eslint-plugin-react'
import pluginImport from 'eslint-plugin-import'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  js.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      globals: globals.browser
    },
    plugins: {
      import: pluginImport,
      react: pluginReact
    },
    rules: {
      semi: ['error', 'never'],
      'react/react-in-jsx-scope': 'off',
      'import/no-unresolved': 'off'
    }
  }
])
