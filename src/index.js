import 'babel-polyfill'
import WebpackIsomorphicTools from 'webpack-isomorphic-tools'
import path from 'path'

import webpackIsomorphicToolsConfig from '../webpack/webpack-isomorphic-tools'

const projectBasePath = path.resolve(__dirname, '../')

global.webpackIsomorphicTools = new WebpackIsomorphicTools(webpackIsomorphicToolsConfig)
  .server(projectBasePath, () => {
    require('./server')
  })
