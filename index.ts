import { Plugin } from "rollup";
import { cleandir as _cleandir } from "@mstssk/cleandir";
export function cleandir(...paths: string[]): Plugin {
  return {
    name: "cleandir",
    async buildStart() {
      await _cleandir(paths);
    },
  };
}
