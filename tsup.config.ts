import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.ts"],
  format: ["cjs", "esm"],
  dts: true, // Generate .d.ts files
  //   minify: true,
  sourcemap: true,
  shims: true,
  skipNodeModulesBundle: true,
  clean: true,
});
