const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')

const plugins = [
  new ExtractTextPlugin({ filename: '[name].[chunkhash].css', allChunks: true }),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false },
    comments: false,
  }),
  new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools')),
]

module.exports = require('./base.config')({
  entry: [
    'babel-polyfill',
    path.resolve(process.cwd(), 'src/client.js'),
  ],
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },
  plugins,
})
