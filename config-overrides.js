const webpack = require('webpack');

module.exports = function override(config) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    process: require.resolve("process/browser.js"),
    http: require.resolve('stream-http'),
    https: require.resolve('https-browserify'),
    util: require.resolve('util/'),
    zlib: require.resolve('browserify-zlib'),
    stream: require.resolve('stream-browserify'),
    url: require.resolve('url/'),
    assert: require.resolve('assert/'),
  };

  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: "process/browser.js",
      Buffer: ["buffer", "Buffer"],
    }),
  ]);

  return config;
};
