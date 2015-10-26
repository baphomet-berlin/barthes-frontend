var path = require('path')
var nodeModules = path.resolve(__dirname, 'node_modules');
var config = {
  entry: path.resolve(__dirname, 'app/main.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/, 
      loader: 'babel',
      exclude: nodeModules
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }]
  }
};

module.exports = config;