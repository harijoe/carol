// eslint-disable-next-line import/prefer-default-export
export const HTTPError = function (message, status = null) {
  this.name = 'HTTPError'
  this.message = `${message || 'An errored response was returned by the API'} ${status != null ? `- code: ${status}` : ''}`
}

HTTPError.prototype = Object.create(Error.prototype)
HTTPError.prototype.constructor = HTTPError
HTTPError.prototype.toString = function () {
  return this.message
}
