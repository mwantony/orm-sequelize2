module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: [2, "double"],
    semi: [2, "always"]
  },
};
