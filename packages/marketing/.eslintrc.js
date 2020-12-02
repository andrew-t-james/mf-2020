module.exports = {
  parser: "babel-eslint",
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  plugins: ["prettier", "react"],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    semi: 0,
  },
};
