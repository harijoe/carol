import express from 'express'
import forceSSL from 'express-force-ssl'
import favicon from 'serve-favicon'
import compression from 'compression'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import path from 'path'
import https from 'https'
import fs from 'fs'
import { ssl, env } from 'config'

const root = path.join(__dirname, '../../..')

export default (routes) => {
  const app = express()

  app.use(compression())
  app.use(morgan(env === 'production' ? 'common' : 'dev'))
  app.use(cookieParser())
  app.use(express.static(path.join(root, 'dist')))
  app.use(favicon(path.join(root, 'src/components/themes/default/favicon.ico')))
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(routes)

  // We use hot reloading with webpack in dev environment
  if (env === 'development') {
    const webpack = require('webpack')
    const webpackConfig = require('../../../webpack/dev.config')

    const compiler = webpack(webpackConfig)
    const serverOptions = {
      quiet: true,
      noInfo: true,
      https: true,
      hot: true,
      inline: true,
      lazy: false,
      historyApiFallback: true,
      path: '/__webpack_hmr',
      headers: { 'Access-Control-Allow-Origin': '*' },
      stats: { colors: true },
    }

    app.use(require('webpack-dev-middleware')(compiler, serverOptions))
    app.use(require('webpack-hot-middleware')(compiler))
  }

  // We use SSL in dev & staging env but not in prod due to varnish
  if (env === 'development' || env === 'staging') {
    app.set('forceSSLOptions', {
      enable301Redirects: true,
      trustXFPHeader: true,
    })
    app.use(forceSSL)

    const server = https.createServer({
      key: fs.readFileSync(path.join(root, ssl.privateKey)),
      cert: fs.readFileSync(path.join(root, ssl.certificate)),
      ca: [fs.readFileSync(path.join(root, ssl.intermediate))],
    }, app)

    return server
  }

  return app
}
