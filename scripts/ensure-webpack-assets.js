const { execSync } = require('child_process')

const ifMissing = require('./if-missing')

const env = process.env.NODE_ENV || 'development'

if (env === 'development') {
  ifMissing('webpack/webpack-assets.json', () => {
    execSync('yarn run build:development')
    execSync('rm -rf dist/')
  })
}
