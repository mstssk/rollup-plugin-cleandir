import type { Plugin } from "rollup";
import { cleandir as _cleandir } from "@mstssk/cleandir";

/**
 * Clean output directory.
 * @param dirs [Optional]
 * @returns {Plugin} Rollup Plugin
 */
export function cleandir(dirs?: string | string[]): Plugin {
  const useOutputOptionsDir = dirs == null;
  return {
    name: "cleandir",
    buildStart() {
      if (!useOutputOptionsDir) {
        return _cleandir(dirs);
      }
    },
    renderStart(outputOptions) {
      if (useOutputOptionsDir && outputOptions.dir) {
        return _cleandir(outputOptions.dir);
      }
    },
  };
}
