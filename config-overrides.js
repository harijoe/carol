const { compose } = require('react-app-rewired')
const rewireSvgReactLoader = require('react-app-rewire-svg-react-loader')
const rewireStyledComponents = require('react-app-rewire-styled-components')
const injectSSLCertificates = require('./ssl')

module.exports = function(config, env) {
  const rewires = compose(
    rewireStyledComponents,
    rewireSvgReactLoader,
  )

  injectSSLCertificates()

  return rewires(config, env)
}
