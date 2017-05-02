const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
            ENABLE_BOOKING: JSON.stringify(process.env.ENABLE_BOOKING)
          },
        }),
        new ExtractTextPlugin({
          filename: 'styles.css',
          disable: true,
          allChunks: true,
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        // new BundleAnalyzerPlugin({
        //   statsFileName: 'stats.json',
        //   reportFilename: 'report.html'
        // })
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
        // new BundleAnalyzerPlugin({
        //   analyzerPort: 3333,
        //   statsFileName: 'stats.json',
        //   reportFilename: 'report.html'
        // })
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
