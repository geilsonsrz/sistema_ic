// webpack.config.js

const path = require('path')

module.exports = {
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    compress: true,
    port: 8080
  },
  entry: {
    index: './src/index.js'
  },
  mode: 'production',
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.js$/,
      use: ['babel-loader']
    }, {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    }]
  },
  output: {
    filename: '[name].min.js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  }
}