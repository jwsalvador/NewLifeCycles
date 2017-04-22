const path = require('path');

module.exports = function (client) {
  const resolves = { extensions: ['.jsx', '.js'], modules: [path.join(__dirname, '..', 'src'), 'node_modules'] };

  if (client !== 'server') {
    resolves.modules = [path.join(__dirname, '..', 'src'), 'node_modules'];
  }

  return resolves;
};
