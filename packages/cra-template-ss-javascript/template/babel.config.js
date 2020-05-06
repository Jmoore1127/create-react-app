module.exports = function(api) {
  api.cache(true);
  const plugins = [  ];
  const presets = [
  '@emotion/babel-preset-css-prop'
  ];
  return {
    plugins,
    presets,
  };
}