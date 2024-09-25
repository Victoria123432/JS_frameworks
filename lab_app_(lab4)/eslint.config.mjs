import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";

export default [
  {
    ignores: ["/dist", "/libs"],
    files: ["**/*.{js,mjs,cjs,ts}"],
    plugins: {
      prettier,
    },
    rules: {
      "prettier/prettier": ["error", { "endOfLine": "auto" }]
    },
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
