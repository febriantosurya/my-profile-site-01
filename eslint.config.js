import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        document: "readonly",
      },
    },
    files: ["*.js"],
    rules: {
      semi: "warn",
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },
];
