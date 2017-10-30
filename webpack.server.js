const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const baseWebpack = require('./webpack.base');

const config = {
  // Inform bundle.js, for nodejs.

  target : 'node',

  // Tell webpack root file

  entry : './src/index.js',

  // Tell webpack where to put file
  output : {
    filename : 'bundle.js',
    path     : path.resolve(__dirname, 'build')
  },

  externals : [webpackNodeExternals()]
};

module.exports = merge(baseWebpack, config);