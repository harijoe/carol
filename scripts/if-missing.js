const fs = require('fs')

module.exports = (path, callback) => {
  if (!fs.existsSync(path)) {
    console.info(`No ${path} found in development environment, creating it`)
    callback(path)
    console.info(`-> created ${path}`)
  }
}
