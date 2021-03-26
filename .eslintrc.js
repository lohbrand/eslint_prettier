module.exports = {
  extends: [
    'airbnb',
    // "airbnb-typescript/base",                 // eslint-config-airbnb-typescript
    'plugin:prettier/recommended', // eslint-plugin-prettier
    // "plugin:@typescript-eslint/recommended",  // @typescript-eslint/eslint-plugin
    'plugin:eslint-comments/recommended', // eslint-plugin-eslint-comments
    'plugin:promise/recommended', // eslint-plugin-promise
    'plugin:unicorn/recommended', // eslint-plugin-unicorn
    'prettier', // eslint-config-prettier
    // "prettier/@typescript-eslint", // eslint-config-prettier
    'plugin:md/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  env: {
    browser: true,
    // commonjs: true,
    es6: true,
    // jest: true,
    // jasmine: true,
    // node: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    // project: './ts-config.json',
    babelOptions: {
      configFile: './babel.config.json',
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      globalReturn: false,
    },
  },
  plugins: [
    // "@typescript-eslint",                     // @typescript-eslint/eslint-plugin
    'eslint-comments', // eslint-plugin-eslint-comments
    'promise', // eslint-plugin-promise
    'unicorn', // eslint-plugin-unicorn
    'prettier', // eslint-plugin-prettier
  ],
  rules: {
    'jsx-a11y/href-no-hash': ['off'],
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'max-len': [
      'warn',
      {
        code: 120,
        tabWidth: 2,
        comments: 120,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'no-debugger': 'off',
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'lines-between-class-members': 'off',
    'class-methods-use-this': 'off',
    'no-prototype-builtins': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/no-null': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    // "@typescript-eslint/camelcase": "off",
    // "@typescript-eslint/no-unused-vars": "off",
    // "@typescript-eslint/no-unused-expressions": "off",
    // "@typescript-eslint/no-explicit-an": "off",
    // "@typescript-eslint/explicit-function-return-type": "off",
    // "@typescript-eslint/no-var-requires": "off",
    // "@typescript-eslint/no-explicit-any": "off",
    // "@typescript-eslint/explicit-module-boundary-types": "off",
    // "@typescript-eslint/no-use-before-define": ["error", {
    //   "functions": false,
    //   "classes": true,
    //   "variables": true,
    //   "typedefs": true
    // }],
  },
  overrides: [
    {
      files: ['*.md'],
      parser: 'markdown-eslint-parser',
      rules: {
        'prettier/prettier': [
          'error',
          // Important to force prettier to use "markdown" parser - otherwise it wouldn't be able to parse *.md files.
          // You also can configure other options supported by prettier here - "prose-wrap" is
          // particularly useful for *.md files
          { parser: 'markdown' },
        ],
      },
    },
    {
      files: ['*.md.js'], // Will match js code inside *.md files
      rules: {
        // Example - disable 2 core eslint rules 'no-unused-vars' and 'no-undef'
        'no-unused-vars': 'off',
        'no-undef': 'off',
      },
    },
    {
      files: ['src/**/*.test.js', 'src/**/*.spec.js', '!src/api/**/*.*'],
      env: {
        jest: true,
      },
      extends: [
        // 'plugin:jest/recommended',
        // 'plugin:jest/style',
        'plugin:jest/all',
      ],
      settings: {
        jest: {
          version: 26,
        },
      },
    },
  ],
};
