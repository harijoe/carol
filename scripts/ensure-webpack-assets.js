import { execSync } from 'child_process'

import ifMissing from './if-missing'

const env = process.env.NODE_ENV || 'development'

if (env === 'development') {
  ifMissing('webpack/webpack-assets.json', () => {
    execSync('yarn run build:development')
    execSync('rm -rf dist/')
  })
}
