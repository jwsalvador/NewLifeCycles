const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (env, client) {
  const plugins = {
    production: {
      browser: [
        new webpack.optimize.UglifyJsPlugin({
          minimize: true,
          compress: {
            warnings: false,
          },
        }),
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production'),
          },
        }),
        new ExtractTextPlugin({
          filename: 'styles.css',
          allChunks: true,
        }),
      ],
      server: [
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false,
          },
        }),
        new ExtractTextPlugin({
          filename: 'styles.css',
          allChunks: true,
        }),
      ],
    },

    development: {
      browser: [
        new webpack.HotModuleReplacementPlugin(),
      ],
      server: [],
    },
  };

  return plugins[env][client];
};
