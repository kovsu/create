import { defineConfig } from "tsup";

export default defineConfig({
  format: ["esm"],
  entry: ["./src/index.js"],
  clean: true,
  dts: true,
});
