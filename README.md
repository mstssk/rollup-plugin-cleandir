# rollup-plugin-cleandir

[![Test](https://github.com/mstssk/rollup-plugin-cleandir/workflows/Test/badge.svg)](https://github.com/mstssk/rollup-plugin-cleandir/actions?query=workflow%3ATest)
[![npm version](https://badge.fury.io/js/rollup-plugin-cleandir.svg)](https://badge.fury.io/js/rollup-plugin-cleandir)

🧹 Rollup plugin to Clean output directories automatically.

## Install

```
$ npm install --save-dev rollup-plugin-cleandir
```

## Usage

```js
import { cleandir } from "rollup-plugin-cleandir";

const OUT_DIR = "./dist";

export default {
  input: ["index.js"],
  output: {
    dir: OUT_DIR,
    format: "es",
  },
  plugins: [cleandir(OUT_DIR)],
};
```

You can also specify `hook` and `order` options.

```js
export default {
  // ...
  plugins: [cleandir(OUT_DIR, { hook: "options", order: "pre" })],
};
```
