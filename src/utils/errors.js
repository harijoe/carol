// eslint-disable-next-line import/prefer-default-export
export const HTTPError = function (message) {
  this.name = 'HTTPError'
  this.message = message || 'An errored response was returned by the API'
}
HTTPError.prototype = Object.create(Error.prototype)
HTTPError.prototype.constructor = HTTPError
