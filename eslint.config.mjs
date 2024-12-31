import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    files: ['**/*.{js,ts}'],
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'no-unused-vars': 'off',
      'no-console': 'off',
      'no-undef': 'off',
    },
    ignores: [
      'backend/coverage/**',
      'backend/reports/**',
      '**/*test.js',
      '**setupTests/*.js',
    ],
  },
];
