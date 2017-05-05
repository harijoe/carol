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
    .then(api.checkErrors)
    .catch(error => Promise.reject(new HTTPError(error.message)))
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

api.checkStatus = (response) => {
  if (response.ok) {
    if (response.status === 204) {
      return ''
    }

    return response.json()
  }

  return response.json()
    .then((err) => {
      throw new HTTPError(err.violations || err.error_description || err.message)
    })
}

api.checkErrors = (response) => {
  if (response.hasErrors) {
    throw new HTTPError(response.body.message)
  }

  return response
}

;['delete', 'get', 'head'].forEach((method) => {
  api[method] = (url, settings) => api.request(url, method, settings)
})

;['post', 'put', 'patch'].forEach((method) => {
  api[method] = (url, settings, data) => api.request(url, method, settings, data)
})

export default api
