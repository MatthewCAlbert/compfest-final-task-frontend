const { override, addBabelPreset } = require("customize-cra");
const path = require("path");

function overrideConfig(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      "@": path.resolve(__dirname, "src"),
    },
  };
  return config;
}

module.exports = override(
  overrideConfig,
  addBabelPreset("@emotion/babel-preset-css-prop")
);
