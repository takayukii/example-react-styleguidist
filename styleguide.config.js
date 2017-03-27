const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  title: 'My Great Style Guide',
  components: './src/js/components/**/*.jsx',
  updateWebpackConfig(webpackConfig) {
    webpackConfig.module.loaders.push(
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src/js'),
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'src/js'),
        loader: 'style-loader!css-loader!sass-loader',
      }
    );
    return webpackConfig;
  },
  getExampleFilename(componentpath) {
    return componentpath.replace(/\.jsx?$/, '.examples.md');
  },
};
