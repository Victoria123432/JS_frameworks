import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier"; // Імпорт плагіна prettier

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    plugins: {
      prettier, // Додаємо плагін у правильному форматі
    },
    rules: {
      "prettier/prettier": "error",
    },
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
