module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-indent': [2, 2],
    indent: [2, 2],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    // "no-unused-vars": "off",
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': [0],
    'i18next/no-literal-string': ['off', { markupOnly: true, ignoreAttribute: ['data-testid'] }],
    'max-len': ['error', { ignoreComments: true, code: 100 }],
    // "react/jsx-props-no-spreading": "warn",
    // "react/function-component-definition": "off",
    // "no-shadow": "off",
    // "import/extendions": "off",
    // "import/no-extraneous-dependencies": "off"
  },
};
