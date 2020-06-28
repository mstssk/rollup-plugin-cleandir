import { Plugin } from "rollup";
import { cleandir as _cleandir } from "@mstssk/cleandir";

export function cleandir(path: string, ...paths: string[]): Plugin {
  return {
    name: "cleandir",
    async buildStart() {
      await _cleandir([path, ...paths]);
    },
  };
}
