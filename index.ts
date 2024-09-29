import type { Plugin } from "rollup";
import { cleandir as _cleandir } from "@mstssk/cleandir";

/**
 * Clean output directory.
 * @param dirs [Optional]
 * @returns {Plugin} Rollup Plugin
 */
export function cleandir(dirs: string | string[]): Plugin {
  return {
    name: "cleandir",
    buildStart: {
      order: "pre",
      sequential: true,
      handler: () => _cleandir(dirs),
    },
  };
}
