import fetch from 'isomorphic-fetch'
import config from 'config'
import { getCurrentLocale } from 'utils/locale'

const api = {}
const requestHeaders = new Headers()
const locale = getCurrentLocale()

api.request = (endpoint, method, settings, body) => {
  const url = (-1 === endpoint.indexOf(config.api.url)) ? config.api.url + endpoint : endpoint

  return fetch(url, api.init(method, settings, body))
    .then(api.checkStatus)
    .then(response => response)
    .catch(error => Promise.reject(error))
}

api.init = (method = 'GET', settings = {}, body = null) => {
  requestHeaders.append('Accept', 'application/ld+json')
  requestHeaders.append('Content-Type', 'application/json')
  if (settings.accessToken) { requestHeaders.append('Authorization', `Bearer ${settings.accessToken}`) }
  if (locale) { requestHeaders.append('Accept-Language', locale) }

  const fetchInit = { method, headers: requestHeaders }

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
api.setToken = token => requestHeaders.append('Authorization', `Bearer ${token}`)
api.unsetToken = () => requestHeaders.delete('Authorization')

;['delete', 'get', 'head'].forEach((method) => {
  api[method] = (url, settings) => api.request(url, method, settings)
})

;['post', 'put', 'patch'].forEach((method) => {
  api[method] = (url, settings, data) => api.request(url, method, settings, data)
})

export default api
