const path = require('path');

module.exports = function () {
  const resolves = { extensions: ['.jsx', '.js', '.css'], modules: [path.join(__dirname, '..', 'src'), 'node_modules'] };

  return resolves;
};
