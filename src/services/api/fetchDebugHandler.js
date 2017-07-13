export default (config, method, settings, body, url) => (response) => {
  if (process.env.NODE_ENV !== 'production' && config.api.debug && !config.browser) {
    const { inspect } = require('util')
    const indent = '\n    '
    const formatAndIndent = object => `${indent}${inspect(object, { colors: true, depth: null }).split('\n').join(indent)}`

    console.info(
      'API', method.toUpperCase(), `${url} [${settings.lang}]:`,
      body ? `\n  Request body:${formatAndIndent(body)}` : '',
      `\n  Response: ${formatAndIndent(response)}`)
  }

  return response
}
