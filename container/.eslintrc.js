module.exports = {
  parser: "babel-eslint",
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: true,
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    semi: 0,
  },
};
