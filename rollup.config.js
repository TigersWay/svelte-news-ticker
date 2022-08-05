import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

import svelte from "rollup-plugin-svelte";

import pkg from "./package.json";

const production = !process.env.ROLLUP_WATCH;


export default {
  input: "src/NewsTicker.svelte",
  output: production
    ? [
        { file: pkg.module, format: "es" },
        { file: pkg.browser, format: "es", plugins: [terser()] },
      ]
    : { file: "dev/bundle.js", format: "es" },
  plugins: [
    svelte({
      compilerOptions: { customElement: true }
    }),
    resolve({
      browser: true,
      dedupe: ["svelte"],
    })
  ],
};
