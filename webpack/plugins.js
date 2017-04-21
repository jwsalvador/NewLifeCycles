const webpack = require('webpack');

module.exports = function (env, client) {
  if (env !== 'production') {
    if (client !== 'server') {
      return [
        new webpack.HotModuleReplacementPlugin(),
      ];
    }
  }

  return [];
};
