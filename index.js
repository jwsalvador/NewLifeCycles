import express from 'express';
import path from 'path';

const app = express();

const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || '3000';

const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

if (env !== 'production') {
  const config = require('./webpack/webpack.config')('browser');
  const compiler = webpack(config);

  app.use(webpackDevServer(compiler, {
    publicPath: '/dist/'
  }));

  app.use(webpackHotMiddleware(compiler));
}

app.use('/dist', express.static(path.join(__dirname, 'public')));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.listen(port, () => {
  console.log(`LISTENING TO PORT ${port} ON ${env} ENVIRONMENT`);
});