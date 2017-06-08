const execSync = require('child_process').execSync
const fs = require('fs')

ifMissing('src/config.local.js', path => fs.writeFileSync(path, 'export default {}'))

const env = process.env.NODE_ENV || 'development'

if (env === 'development') {
  ifMissing('webpack/webpack-assets.json', () => {
    execSync('yarn run build:development')
    execSync('rm -rf dist/')
  })
}

function ifMissing(path, callback) {
  if (!fs.existsSync(path)) {
    console.info(`No ${path} found in development environment, creating it`)
    callback(path)
    console.info(`-> created ${path}`)
  }
}

