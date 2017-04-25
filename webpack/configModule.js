const path = require('path');
const fs = require('fs');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const loaders = function (env, client) {
  const that = [];

  const babelLoader = {
    test: /\.js$|\.jsx$/,
    loader: 'babel-loader',
    query: {
      presets: ['es2015', 'react', 'stage-0'],
    },
    exclude: [
      path.join(__dirname, '..', '..', 'node_modules'),
    ],
  };

  if (client !== 'server') {
    babelLoader.include = path.join(__dirname, '..', 'src');
    if (env !== 'production') {
      babelLoader.query.env = {
        development: {
          presets: ['react-hmre'],
        },
      };
    }
  }

  that.push(babelLoader);

  if (env !== 'production') {
    that.push({
      test: /\.css$/,
      loader: 'style-loader!css-loader?modules&importLoaders=1!postcss-loader',
    });
  } else {
    that.push({
      test: /\.css$/,
      use:
        ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              query: {
                localIdentName: '[hash:8]',
                modules: true,
              },
            },
            'postcss-loader',
          ],
        }),
    });
  }

  that.push({ test: /\.(jpg|png)?$/, loader: 'file-loader' });

  return that;
};

const externalModules =
  fs.readdirSync('node_modules')
  .filter(x => ['.bin'].indexOf(x) === -1)
  .reduce((acc, cur) => {
    acc[cur] = `commonjs ${cur}`;
    return acc;
  }, {});


module.exports = {
  loaders,
  externalModules,
};
