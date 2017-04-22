/* eslint global-require: 0 */

import { ENV } from '../../config/env';

export default (app) => {
  if (ENV !== 'production') {
    const webpack = require('webpack');
    const webpackDevServer = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const config = require('../../webpack/webpack.config')('browser');
    const compiler = webpack(config);

    app.use(webpackDevServer(compiler, {
      publicPath: '/dist/',
    }));

    app.use(webpackHotMiddleware(compiler));
  }
};
