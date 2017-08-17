require('babel-polyfill')
require('babel-core/register')

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at:', p, 'reason:', reason)
})

const WebpackIsomorphicTools = require('webpack-isomorphic-tools')
const webpackIsomorphicToolsConfig = require('../webpack/webpack-isomorphic-tools')
const path = require('path')

const projectBasePath = path.resolve(__dirname, '../')

global.webpackIsomorphicTools = new WebpackIsomorphicTools(webpackIsomorphicToolsConfig).server(projectBasePath, () => {
  require('./server')
})
