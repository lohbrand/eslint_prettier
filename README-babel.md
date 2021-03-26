# Babel

## Basic

´´´sh
npm install --save-dev babel-loader @babel/core
´´´

## ES2015+

babel.config.json

´´´sh
npm install @babel/preset-env --save-dev
´´´

´´´json
{
"presets": ["@babel/preset-env"]
}
´´´

## Webpack

´´´sh
npm install --save-dev babel-loader @babel/core
´´´

webpack.config.js

´´´js
{
module: {
rules: [
{
test: /\.m?js$/,
exclude: /node_modules/,
use: {
loader: "babel-loader",
options: {
presets: ['@babel/preset-env']
}
}
}
]
}
}
´´´

## Jest

```sh
npm install --save-dev babel-jest
```

package.json
´´´json
{
"scripts": {
"test": "jest"
},
"jest": {
"transform": {
"^.+\\.[t|j]sx?$": "babel-jest"
}
}
}
´´´

## React

BabelPresent
´´´json
{
"presets": ["@babel/preset-react"]
}
´´´

## Flow

@babel/preset-flow

In
´´´js
function foo(one: any, two: number, three?): string {}
´´´
Out
´´´js
function foo(one: any, two: number, three?): string {}
´´´

´´´sh
npm install --save-dev @babel/preset-flow
´´´

BabelPresent
´´´json
{
"presets": ["@babel/preset-flow"]
}
´´´

## polyFill

´´´sh
npm install --save @babel/polyfill
´´´

in entry point of node/browserify/webpack

```js
import "@babel/polyfill";
´´´

such as in webpack

webpack.config.js

´´´js
module.exports = {
  entry: ["@babel/polyfill", "./app/js"],
};
´´´

## @babel/plugin-transform-runtime

´´´sh
npm install --save-dev @babel/plugin-transform-runtime
´´´

´´´sh
npm install --save @babel/runtime
´´´

BabelPresent
´´´json
{
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "absoluteRuntime": false,
        "corejs": false,
        "helpers": true,
        "regenerator": true,
        "version": "7.0.0-beta.0"
      }
    ]
  ]
}
´´´

## Specs

- @babel/plugin-proposal-object-rest-spread
- @babel/plugin-proposal-class-properties
- @babel/plugin-transform-export-extensions
- @babel/plugin-transform-template-literals
- @babel/plugin-proposal-decorators
- @babel/plugin-proposal-pipeline-operator
- @babel-plugin-transform-class-constructor-call
- @babel/plugin-async-to-generator
- @babel/register
- @babel/generator
- @babel/core or  @babel/standalone

## Parser



## Reference

- [Babel installation guide](https://babeljs.io/en/setup/#installation)
```
