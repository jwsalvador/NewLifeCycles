const path = require('path');
const fs = require('fs');

const loaders = function (env, client) {
  const that = [];

  that.push({
    test: /\.css$/,
    loader: 'style-loader!css-loader?modules&importLoaders=1!postcss-loader',
  });

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
    babelLoader.query.env = {
      development: {
        presets: ['react-hmre'],
      },
    };
  }

  that.push(babelLoader);

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
