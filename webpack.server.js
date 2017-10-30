const path = require('path');

module.exports = {
  // Inform bundle.js, for nodejs.

  target : 'node',

  // Tell webpack root file

  entry : './src/index.js',

  // Tell webpack where to put file
  output : {
    filename : 'bundle.js',
    path     : path.resolve(__dirname, 'build')
  },

  // Tell webpack to run babel

  module : {
    rules : [
      {
        test    : /\.js?$/,
        loader  : 'babel-loader',
        exclude : /node_modules/,
        options : {
          presets : [
            'react',
            'stage-0',
            ['env', { targets : { browsers : ['last 2 versions'] } }]
          ]
        }
      }
    ]
  }
};