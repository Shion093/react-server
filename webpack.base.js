const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // Tell webpack to run babel
  module  : {
    rules : [
      {
        test    : /\.js?$/,
        loader  : 'babel-loader',
        exclude : /node_modules/,
        options : {
          plugins : [
            'transform-decorators-legacy',
            'transform-class-properties'
          ],
          presets : [
            'es2015',
            'react',
            'stage-0',
            ['env', { targets : { browsers : ['last 2 versions'] } }]
          ]
        }
      },
      {
        test   : /\.css$/,
        loader : ExtractTextPlugin.extract({
          fallback : 'style-loader',
          use      : 'css-loader'
        })
      },
      {
        test   : /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
        loader : 'url-loader?limit=100000'
      },
    ],
  },
  plugins : [
    new ExtractTextPlugin({
      filename  : '[name].css',
      allChunks : true
    })
  ],
};