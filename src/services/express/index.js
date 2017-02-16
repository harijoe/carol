import express from 'express'
import forceSSL from 'express-force-ssl'
import compression from 'compression'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import path from 'path'
import https from 'https'
import fs from 'fs'
import { ssl } from 'config'

const root = path.join(__dirname, '../../..')

export default (routes) => {
  const app = express()

  app.set('forceSSLOptions', {
    enable301Redirects: true,
    trustXFPHeader: true,
  })
  app.use(forceSSL)
  app.use(compression())
  app.use(morgan('dev'))
  app.use(cookieParser())
  app.use(express.static(path.join(root, 'dist')))
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(routes)

  const server = https.createServer({
    key: fs.readFileSync(path.join(root, ssl.privateKey)),
    cert: fs.readFileSync(path.join(root, ssl.certificate)),
    ca: fs.readFileSync(path.join(root, ssl.intermediate)),
  }, app)

  return server
}
