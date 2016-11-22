var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],

  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    }, {
        test: /\.scss$/,
        include: /src/,
        loaders: ['style', 'css', 'sass']
      }]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  devServer: {
    historyApiFallback: true,
    contentBase: './',
    port: 8006
  },

  plugins: [
    new ExtractTextPlugin('src/styles/style.css', {
      allChunks: true
    })
  ]
};
