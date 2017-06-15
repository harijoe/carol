require('babel-polyfill')
require('babel-core/register')

const WebpackIsomorphicTools = require('webpack-isomorphic-tools')
const webpackIsomorphicToolsConfig = require('../webpack/webpack-isomorphic-tools')
const path = require('path')

const projectBasePath = path.resolve(__dirname, '../')

global.webpackIsomorphicTools = new WebpackIsomorphicTools(webpackIsomorphicToolsConfig)
  .server(projectBasePath, () => {
    require('./server')
  })
