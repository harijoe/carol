import { client } from 'nightwatch-cucumber'

class NightwatchError extends Error {
  constructor(result) {
    super(JSON.stringify(result, null, 2))
    Error.captureStackTrace(this, NightwatchError)
  }
}

const nightwatchPromisify = (key, api) => (...args) =>
  // use await on nightwatch command otherwise the command is not triggered as nightwatch command are not javascript promises
  new Promise(async (resolve, reject) => {
    await api(...args, result => {
      try {
        if (result.status === 0) {
          resolve(result.value)
        } else {
          reject(new NightwatchError(result))
        }
      } catch (e) {
        reject(e)
      }
    })
  })

const promisifyNightwatchApis = () =>
  [
    'element',
    'elementIdAttribute',
    'elements',
    'execute',
    'getText',
    'saveScreenshot',
  ].reduce(
    (apis, key) => {
      const api = apis[key]
      apis[key] = nightwatchPromisify(key, api) // eslint-disable-line no-param-reassign
      return apis
    },
    { ...client },
  )

export default promisifyNightwatchApis()
