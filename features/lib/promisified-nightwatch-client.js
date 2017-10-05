import { client } from 'nightwatch-cucumber'

class NightwatchError extends Error {
  constructor(result) {
    super(JSON.stringify(result, null, 2))
    Error.captureStackTrace(this, NightwatchError)
  }
}

const nightwatchPromisify = (api) => (...args) =>
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

const APIS_TO_PROMISIFY = [
  'element',
  'elementIdAttribute',
  'elements',
  'execute',
  'getText',
  'saveScreenshot',
]

export default new Proxy(client, {
  get(target, name) {
    const api = target[name]
    return APIS_TO_PROMISIFY.includes(name) ? nightwatchPromisify(api) : api
  },
})
