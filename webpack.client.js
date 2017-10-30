const path = require('path');
const merge = require('webpack-merge');
const baseWebpack = require('./webpack.base');

const config = {
  entry : './src/client/index.js',
  output : {
    filename : 'bundle.js',
    path     : path.resolve(__dirname, 'public')
  }
};

module.exports = merge(baseWebpack, config);