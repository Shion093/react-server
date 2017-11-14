const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool : 'source-map',
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
        test: /\.less$/i,
        use: ExtractTextPlugin.extract([ 'css-loader', 'less-loader' ])
      },
      {
        test   : /\.(png|woff|woff2|eot|ttf|svg|jpg|gif)$/,
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