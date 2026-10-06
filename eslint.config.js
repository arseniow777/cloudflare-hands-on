import eslintPluginAstro, { processors } from "eslint-plugin-astro";

export default [
  ...eslintPluginAstro.configs.recommended,
  {
    files: ["*.astro", "*.ts", "*.tsx", "*.js"],
    processors: "astro/client-side-ts",
    rules: {},
  },
];
