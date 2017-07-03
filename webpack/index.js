require('babel-core/register')
const config = require('../src/config')

const webpackConfigType = config.devServer ? 'dev' : 'prod'

module.exports = require(`./${webpackConfigType}.config`)
