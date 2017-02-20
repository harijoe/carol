const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')
const webpackIsomorphicToolsConfig = require('./webpack-isomorphic-tools')

const ip = (typeof process.env.PUB_IP !== 'undefined' && process.env.PUB_IP.toString()) || '0.0.0.0'
const port = (+process.env.PORT + 1) || 80
const DEBUG = process.env.NODE_ENV === 'development'

const config = {
  devtool: DEBUG ? 'eval' : false,
  target: 'web',
  entry: [
    'babel-polyfill',
    path.join(__dirname, '../src/client'),
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'app.[hash].js',
    publicPath: DEBUG ? `http://${ip}:${port}/` : '/',
  },
  resolve: {
    modulesDirectories: ['src', 'node_modules'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `'${process.env.NODE_ENV}'`,
    }),
    new WebpackIsomorphicToolsPlugin(webpackIsomorphicToolsConfig),
  ],
  module: {
    loaders: [
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
    `webpack-dev-server/client?http://${ip}:${port}/`,
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch'
  )

  config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../public/base.html'),
    }),
  ])
} else {
  config.plugins = config.plugins.concat([
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
  ])
}

module.exports = config
