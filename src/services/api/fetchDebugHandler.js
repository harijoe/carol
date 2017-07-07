export default (config, method, url) => (response) => {
  if (process.env.NODE_ENV !== 'production' && config.api.debug && !config.browser) {
    const { inspect } = require('util')
    const indent = '\n  '

    console.info(
      'API Response for', method.toUpperCase(), `${url}:`,
      `${indent}${inspect(response, { colors: true, depth: null }).split('\n').join(indent)}`)
  }

  return response
}
