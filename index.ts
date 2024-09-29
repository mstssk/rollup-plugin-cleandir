import type { Plugin, FunctionPluginHooks } from "rollup";
import { cleandir as _cleandir } from "@mstssk/cleandir";

type PluginHookName = keyof FunctionPluginHooks;
type Order = "pre" | "post";
type Options = { hook: PluginHookName; order: Order };

/**
 * Clean output directory.
 * @param dirs [Optional]
 * @returns {Plugin} Rollup Plugin
 */
export function cleandir(dirs: string | string[], options?: Options): Plugin {
  const hook: PluginHookName = options?.hook ?? "buildStart";
  const order: Order = options?.order ?? "pre";
  return {
    name: "cleandir",
    [hook]: {
      order,
      sequential: true,
      handler: () => _cleandir(dirs),
    },
  };
}
