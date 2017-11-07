module.exports = {
  // Tell webpack to run babel
  module : {
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
            ['env', {targets : {browsers : ['last 2 versions']}}]
          ]
        }
      },
      {
        test: /\.css$/,
        loader: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
    ]
  }
};