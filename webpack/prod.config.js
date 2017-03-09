const path = require('path')
const webpack = require('webpack')
const CleanPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')

const projectRootPath = path.resolve(__dirname, '../')
const assetsPath = path.resolve(projectRootPath, './build')

const plugins = [
  new CleanPlugin([assetsPath], { root: projectRootPath }),
  new ExtractTextPlugin('[name].[chunkhash].css', { allChunks: true }),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
  new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools')),
]

module.exports = require('./base.config')({
  entry: [
    'babel-polyfill',
    path.join(process.cwd(), 'src/client.js'),
  ],
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },
  plugins,
})
