const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

isProd = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    bundle: './src/js/index.js'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'react-hmre']
        }
      },
      {
        test: /\.scss$/,
        loader: isProd ? ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader!sass-loader'}) :
          'style-loader!css-loader!sass-loader',
      }
    ]
  },
  plugins: isProd ? [
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    })
  ] : [],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool : 'source-map',
  devServer : {
    contentBase: './public',
    port : 8080,
    hot: true,
    stats: { colors: true },
  },
};
