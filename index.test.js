import { rollup } from "rollup";
import { cleandir } from "./index";

describe("cleandir", () => {
  it("to be function", () => {
    expect(typeof cleandir).toBe("function");
    expect(typeof rollup).toBe("function");
  });
});
