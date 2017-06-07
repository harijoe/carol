const execSync = require('child_process').execSync
const fs = require('fs')
const env = (typeof process.env.NODE_ENV !== 'undefined' && process.env.NODE_ENV.toString()) || 'development'

if (env === 'development') {
  if (!fs.existsSync('webpack/webpack-assets.json')) {
    console.info('No webpack assets found in development environment, rebuilding it')
    console.info('...')
    execSync('yarn run build:development')
    execSync('rm -rf dist/')
    console.info('done!')
  }
}
