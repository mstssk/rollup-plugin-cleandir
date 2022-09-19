import { cleandir } from "rollup-plugin-cleandir";

export default {
  input: ["index.js"],
  output: {
    dir: "./dist",
    format: "es",
  },
  plugins: [cleandir()],
};
