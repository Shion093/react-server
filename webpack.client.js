const path = require('path');
const merge = require('webpack-merge');
const baseWebpack = require('./webpack.base');
const baseWebpackProd = require('./webpack.base.prod');

const config = {
  entry : './src/client/index.js',
  output : {
    filename : 'bundle.js',
    path     : path.resolve(__dirname, 'public')
  }
};

module.exports = env => {
  console.log(env);
  if (env.NODE_ENV=== 'prod') {
    return merge(baseWebpackProd, config);
  }
  return merge(baseWebpack, config);
}