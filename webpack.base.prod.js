const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
// const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  module  : {
    rules : [
      {
        test    : /\.js?$/,
        loader  : 'babel-loader',
        exclude : /node_modules/,
        options : {
          plugins : [
            'transform-decorators-legacy',
            'transform-class-properties',
            'transform-react-constant-elements',
            'transform-react-inline-elements'
          ],
          presets : [
            'es2015',
            'react',
            'stage-0',
            ['env', { 'modules': false, targets : { browsers : ['last 2 versions'], 'node': 4 } }]
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
        test   : /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
        loader : 'url-loader?limit=100000'
      },
    ],
  },
  plugins : [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new ExtractTextPlugin({
      filename  : '[name].css',
      allChunks : true
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      output: {
        comments: false,
      },
    }),
    new CompressionPlugin({
      asset     : '[path].gz[query]',
      algorithm : 'gzip',
      test      : /\.js$|\.css$|\.html$/,
      threshold : 10240,
      minRatio  : 0.8
    }),
  ],
};