const path = require('path');

module.exports = function (env, client) {
  const output = {};

  if (client === 'server') {
    if (env !== 'production') {
      output.devtoolModuleFilenameTemplate = '[absolute-resource-path]';
    }

    output.path = path.join(__dirname, '..', 'dist');
    output.filename = '[name].js';
    output.publicPath = '/dist/';
    output.libraryTarget = 'commonjs2';
  } else {
    output.path = path.join(__dirname, '..', 'dist', 'public');
    output.filename = 'bundle.js';
    output.publicPath = '/dist/';
  }

  return output;
};
