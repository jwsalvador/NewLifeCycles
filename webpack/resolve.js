const path = require('path');

module.exports = function (client) {
  const resolves = { modules: [path.join(__dirname, '..', 'src'), 'node_modules'] };

  if (client !== 'server') {
    resolves.extensions = ['.jsx', '.js'];
  }
  return resolves;
};
