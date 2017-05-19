// eslint-disable-next-line import/prefer-default-export
export const HTTPError = function (message, status = null) {
  this.name = 'HTTPError'
  this.message = message || 'An errored response was returned by the API'
  this.status = status
}

HTTPError.prototype = Object.create(Error.prototype)
HTTPError.prototype.constructor = HTTPError
HTTPError.prototype.toString = function () {
  try {
    if (Object.isObject(this.message)) {
      return JSON.stringify(this.message)
    }
  } catch (e) {
    return this.message.toString()
  }

  return this.message
}
