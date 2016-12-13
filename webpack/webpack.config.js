var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')
var webpackIsomorphicToolsConfig = require('./webpack-isomorphic-tools')

var ip = process.env.IP || '0.0.0.0'
var port = (+process.env.PORT + 1) || 3001
var DEBUG = process.env.NODE_ENV !== 'production'

var config = {
  devtool: DEBUG ? 'source-map' : false,
  entry: [
    'babel-polyfill',
    path.join(__dirname, '../src/client'),
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'app.[hash].js',
    publicPath: DEBUG ? 'http://' + ip + ':' + port + '/' : '/',
  },
  resolve: {
    modulesDirectories: ['src', 'node_modules'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': "'" + process.env.NODE_ENV + "'",
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../public/index.html'),
    }),
  ],
  module: {
    loaders: [
      { test: /\.html$/, loader: 'html' },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader?sourceMap&-minimize&modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]' },
      { test: /\.png$/, loader: 'url-loader?prefix=images/&limit=8000&mimetype=image/png' },
      { test: /\.jpg$/, loader: 'url-loader?prefix=images/&limit=8000&mimetype=image/jpeg' },
      { test: /\.woff$/, loader: 'url-loader?prefix=fonts/&limit=8000&mimetype=application/font-woff' },
      { test: /\.ttf$/, loader: 'file-loader?prefix=fonts/' },
      { test: /\.eot$/, loader: 'file-loader?prefix=fonts/' },
      { test: /\.json$/, loader: 'json-loader' },
    ],
  },
}

if (DEBUG) {
  config.entry.unshift(
    'webpack-dev-server/client?http://' + ip + ':' + port + '/',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch'
  )

  config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new WebpackIsomorphicToolsPlugin(webpackIsomorphicToolsConfig),
  ])
} else {
  config.plugins = config.plugins.concat([
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
    new WebpackIsomorphicToolsPlugin(webpackIsomorphicToolsConfig),
  ])
}

module.exports = config
