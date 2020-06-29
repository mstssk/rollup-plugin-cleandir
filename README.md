# rollup-plugin-cleandir

[![Test](https://github.com/mstssk/rollup-plugin-cleandir/workflows/Test/badge.svg)](https://github.com/mstssk/rollup-plugin-cleandir/actions?query=workflow%3ATest)
[![npm version](https://badge.fury.io/js/rollup-plugin-cleandir.svg)](https://badge.fury.io/js/rollup-plugin-cleandir)

🧹 Rollup plugin to Clean output directories before building.

## Install

```
$ npm install --save-dev rollup-plugin-cleandir
```

## Usage

In rollup.config.js:

```js
import { cleandir } from "rollup-plugin-cleandir";

export default {
  input: ["index.js"],
  output: {
    dir: "./dist",
    format: "es",
  },
  plugins: [cleandir("./dist")],
};
```
