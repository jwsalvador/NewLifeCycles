const path = require('path');
const resolve = require('./resolve.js');
const configModule = require('./configModule.js');
const output = require('./output.js');
const plugins = require('./plugins.js');

const env = process.env.NODE_ENV || 'development';

module.exports = (client = '') => {
  const isBrowserClient = client === 'browser';
  const isProduction = env === 'production';

  const server = {
    name: 'server-side compile',
    context: path.resolve(__dirname, '..', 'src'),
    entry: {
      server: '../index',
    },
    target: 'node',
    node: {
      __dirname: false,
    },
    devtool: 'source-map',
    output: output(env, 'server'),
    resolve: resolve('server'),
    externals: configModule.externalModules,
    plugins: plugins(env, 'server'),
    module: {
      loaders: configModule.loaders(env, 'server'),
    },
  };

  const entry = isProduction ? './src/index.jsx' : [
      './src/index.jsx',
      'webpack-hot-middleware/client?reload=true',
    ];

  const browser = {
    name: 'client-side compile',
    entry: entry,
    output: output(env, 'browser'),
    devtool: isProduction ? 'cheap-module-source-map' : 'eval-source-map',
    target: 'web',
    plugins: plugins(env, 'browser'),
    resolve: resolve('browser'),
    module: {
      loaders: configModule.loaders(env, 'browser'),
    },
  };

  const prodRender = [browser, server];
  const devRender = isBrowserClient ? browser : server;

  return isProduction ? prodRender : devRender;
};
