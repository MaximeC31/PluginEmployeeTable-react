import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/index.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  external: ["react"],
  plugins: [
    resolve(),
    postcss({ minimize: true }),
    babel({
      babelHelpers: "bundled",
      extensions: [".js", ".jsx"],
      exclude: "node_modules/**",
    }),
  ],
};
