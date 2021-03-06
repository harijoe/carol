const { execSync } = require('child_process')

const ifMissing = require('./if-missing')

const env = process.env.NODE_ENV || 'development'

if (['development', 'insideDocker', 'outsideDocker'].includes(env)) {
  ifMissing('webpack/webpack-assets.json', () => {
    execSync('yarn run build')
    execSync('rm -rf dist/')
  })
}
