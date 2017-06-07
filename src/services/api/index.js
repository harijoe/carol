import fetch from 'isomorphic-fetch'
import config from 'config'
import { HTTPError } from 'utils/errors'

const api = {}
const headers = {}

api.request = (endpoint, method, settings, body) => {
  const url = (endpoint.indexOf(config.api.url) === -1) ? config.api.url + endpoint : endpoint

  // @TODO 500 errors are not handled correctly — they throw a generic message instead of a specific one
  return fetch(url, api.init(method, settings, body))
    .then(api.checkStatus)
}

api.init = (method = 'GET', settings = {}, body = null) => {
  headers.Accept = 'application/ld+json'
  headers['Content-Type'] = 'application/json'
  if (settings.accessToken != null) { headers.Authorization = `Bearer ${settings.accessToken}` }
  if (settings.lang != null) { headers['Accept-Language'] = settings.lang }

  const fetchInit = { method, headers, rejectUnauthorized: false }

  if (body) { fetchInit.body = JSON.stringify(body) }

  return fetchInit
}

api.checkStatus = (stream) => {
  const { status } = stream

  if (stream.ok) {
    if (status === 204) { // 204 has no body, resulting in a JSON parsing error
      return ''
    }
  }

  return stream.json()
    .then((response) => {
      if (response != null && response.hasErrors) {
        throw new HTTPError(response.body.message, status)
      } else if (status != null && status < 400) {
        return response
      } else {
        throw new HTTPError(response.violations || response.error_description || response.message, status)
      }
    })
}

;['delete', 'get', 'head'].forEach((method) => {
  api[method] = (url, settings) => api.request(url, method, settings)
})

;['post', 'put', 'patch'].forEach((method) => {
  api[method] = (url, settings, data) => api.request(url, method, settings, data)
})

export default api
