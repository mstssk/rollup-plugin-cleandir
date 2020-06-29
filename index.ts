import { Plugin } from "rollup";
import { cleandir as _cleandir } from "@mstssk/cleandir";

export function cleandir(dirs: string | string[]): Plugin {
  return {
    name: "cleandir",
    buildStart() {
      return _cleandir(dirs);
    },
  };
}
