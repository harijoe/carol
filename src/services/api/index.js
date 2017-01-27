import fetch from 'isomorphic-fetch'
import config from 'config'
import { getCurrentLocale } from 'utils/locale'

const api = {}
const headers = {}
const locale = getCurrentLocale()

api.request = (endpoint, method, settings, body) => {
  const url = (endpoint.indexOf(config.api.url) === -1) ? config.api.url + endpoint : endpoint

  return fetch(url, api.init(method, settings, body))
    .then(api.checkStatus)
    .then(response => response)
    .catch(error => Promise.reject(error))
}

api.init = (method = 'GET', settings = {}, body = null) => {
  headers['Accept'] = 'application/ld+json'
  headers['Content-Type'] = 'application/json'
  if (settings.accessToken) { headers['Authorization'] = `Bearer ${settings.accessToken}` }
  if (locale) { headers['Accept-Language'] = locale }

  const fetchInit = { method, headers }

  if (body) { fetchInit.body = JSON.stringify(body) }

  return fetchInit
}

api.checkStatus = (response) => {
  if (response.ok) {
    return response.json()
  }

  return response.json()
    .then((err) => {
      throw new Error(`${response.statusText} (${response.status}) error occurred downstream: ${err.message}`)
    })
}

// Token services
api.generateToken = (grantType, extra) => api.request(`/oauth/v2/token?client_id=${config.api.clientId}&client_secret=${config.api.clientSecret}&grant_type=${grantType}${extra}`)
api.setToken = token => headers['Authorization'] = `Bearer ${token}`
api.unsetToken = () => headers['Authorization'] = null

;['delete', 'get', 'head'].forEach((method) => {
  api[method] = (url, settings) => api.request(url, method, settings)
})

;['post', 'put', 'patch'].forEach((method) => {
  api[method] = (url, settings, data) => api.request(url, method, settings, data)
})

export default api
