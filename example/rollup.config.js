const { cleandir } = require("rollup-plugin-cleandir");

const OUT_DIR = "./dist";

export default {
  input: ["index.js"],
  output: {
    dir: OUT_DIR,
    format: "es",
  },
  plugins: [cleandir(OUT_DIR)],
};
