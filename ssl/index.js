const fs = require('fs')
const path = require('path')
const appConfig = require('../src/config')

const injectSSLCertificates = () => {
  if (appConfig.ssl.enabled) {
    const devServerConfigPath = 'react-scripts/config/webpackDevServer.config'
    const devServerConfig = require(devServerConfigPath)
    require.cache[require.resolve(devServerConfigPath)].exports = (
      proxy,
      allowedHost
    ) => {
      const conf = devServerConfig(proxy, allowedHost)
      conf.https = {
        key: fs.readFileSync(
          path.join(__dirname, 'qarx.io.key')
        ),
        cert: fs.readFileSync(
          path.join(__dirname, 'qarx.io.crt')
        ),
      }

      return conf
    }
  }
}

module.exports = injectSSLCertificates
