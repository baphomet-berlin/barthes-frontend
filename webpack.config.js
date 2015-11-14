var path = require('path')
var nodeModules = path.resolve(__dirname, 'node_modules')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var config = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'src/main.js')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/, 
        loader: 'babel',
        exclude: nodeModules
      }, {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  },
  plugins: [
      new ExtractTextPlugin('bundle.css')
  ]
};

module.exports = config
