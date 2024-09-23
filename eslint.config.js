import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        document: "readonly",
        require: "readonly",
        module: "readonly",
        process: "readonly",
        __dirname: "readonly",
      },
    },
    files: ["**/*.js"],
    rules: {
      semi: "warn",
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },
];
