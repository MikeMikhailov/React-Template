module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      globalReturn: false,
    },
  },
  plugins: [
    'react',
  ],
  rules: {
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    "react/prop-types": [2, { ignore: ['children'] }],
  },
};
