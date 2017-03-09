const path = require('path')
const webpack = require('webpack')
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')

const plugins = [
  new webpack.HotModuleReplacementPlugin(), // Tell webpack we want hot reloading
  new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools')).development(),
]

module.exports = require('./base.config')({
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client',
    'react-hot-loader/patch',
    path.resolve(process.cwd(), 'src/client.js'),
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  plugins,
  devtool: 'cheap-module-eval-source-map',
  debug: true,
})
