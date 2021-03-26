# Eslint

## Eslint - prettier - airbnb - react

auto install ()

```bash
 exec 3<&1;bash <&3 <(curl https://raw.githubusercontent.com/paulolramos/eslint-prettier-airbnb-react/master/eslint-prettier-config.sh 2> /dev/null)
```

## plugins

- "eslint-comments", // eslint-plugin-eslint-comments

### MarkDown

´´´sh
npm install eslint-plugin-md --save-dev
´´´

```js
// .eslintrc.js
module.exports = {
  extends: ['plugin:md/recommended'],
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
  ],
};
```

### import

```sh
# inside your project's working tree
npm install eslint-plugin-import --save-dev
```

```yaml
---
extends:
  - eslint:recommended
  - plugin:import/errors
  - plugin:import/warnings

# or configure manually:
plugins:
  - import

rules:
  import/no-unresolved: [2, { commonjs: true, amd: true }]
  import/named: 2
  import/namespace: 2
  import/default: 2
  import/export: 2
  # etc...
```

for typescript add 'plugin:import/typescript'

### jest

```json
{
  "env": {
    "jest/globals": true
  }
}
```

```sh
npm install eslint-plugin-jest --save-dev
```

```json
{
  "plugins": ["jest"]
}
```

```json
{
  "extends": ["plugin:jest/recommended"]
}
```

or

```json
{
  "rules": {
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error"
  }
}
```

```json
{
  "settings": {
    "jest": {
      "version": 26
    }
  }
}
```

## parser

´´´sh
npm install eslint @babel/core @babel/eslint-parser --save-dev
´´´

eslint

´´´json
parser: "@babel/eslint-parser",
´´´

## reference

- [eslint-prettier-airbnb-react](https://github.com/paulolramos/eslint-prettier-airbnb-react)
- (Airbnb JavaScript Style Guide() {)[<https://github.com/airbnb/javascript#airbnb-javascript-style-guide>-]
