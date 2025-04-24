import globals from "globals";
import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import airbnb from "eslint-config-airbnb-base";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: globals.node,
    },
    plugins: { import: importPlugin },
    rules: {
      ...js.configs.recommended.rules,
      ...airbnb.rules,
      ...importPlugin.configs.recommended.rules,
      semi: "error",
    },
  },
];
