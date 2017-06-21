const NODE_ENV = process.env.NODE_ENV || 'development'

if (NODE_ENV === 'production' || NODE_ENV === 'qa') {
  module.exports = require('./webpack/prod.config')
} else {
  module.exports = require('./webpack/dev.config')
}
