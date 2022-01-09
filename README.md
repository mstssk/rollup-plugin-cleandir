# rollup-plugin-cleandir

[![Test](https://github.com/mstssk/rollup-plugin-cleandir/workflows/Test/badge.svg)](https://github.com/mstssk/rollup-plugin-cleandir/actions?query=workflow%3ATest)
[![npm version](https://badge.fury.io/js/rollup-plugin-cleandir.svg)](https://badge.fury.io/js/rollup-plugin-cleandir)

🧹 Rollup plugin to Clean output directories automatically.

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
  plugins: [cleandir()],
};
```

### Clean before building.

rollup-plugin-cleandir@v2 runs when [renderStart](https://rollupjs.org/guide/en/#output-generation-hooks) hook by default.

If you want to clean before building([buildStart](https://rollupjs.org/guide/en/#build-hooks) hook), set output directory path to `cleandir` function.

e.g. `cleandir("./dist")`

This is same of rollup-plugin-cleandir@v1 behavior.
