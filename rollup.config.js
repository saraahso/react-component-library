import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";
import sass from 'rollup-plugin-sass';

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      sass()
    ],
  },
  {
    input: "dist/esm/types/index.d.js",
    output: [{ file: "dist/index.d.js", format: "esm" }],
    plugins: [dts()],
  },
];