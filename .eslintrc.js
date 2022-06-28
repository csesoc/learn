module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier', 'next'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    // allow no-undef
    'no-undef': 'off',
    // allow no-unused-vars
    'no-unused-vars': 'off',
    // allow alt-text
    'jsx-a11y/alt-text': 'off',
    // allow no-duplicates
    'no-duplicate-imports': 'off',
    // allow no-unescaped-entities
    'jsx-a11y/no-unescaped-entities': 'off'
  }
}
