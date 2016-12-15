import fetch from 'isomorphic-fetch'
import config from 'config'
import { getCurrentLocale } from './locale'

const initRequest = (method = 'GET', token = null, body = null) => {
  const requestHeaders = new Headers()
  const locale = getCurrentLocale()

  requestHeaders.append('Accept', 'application/ld+json')
  requestHeaders.append('Content-Type', 'application/json')
  if (token) { requestHeaders.append('Authorization', `Bearer ${token}`) }
  if (locale) { requestHeaders.append('Accept-Language', locale) }

  const fetchInit = { method, headers: requestHeaders }

  if (body) { fetchInit.body = JSON.stringify(body) }

  return fetchInit
}

const checkStatus = (response) => {
  if (response.ok) {
    return response.json()
  }

  return response.json()
    .then((err) => {
      throw new Error(`${response.statusText} (${response.status}) error occurred downstream: ${err.message}`)
    })
}

const callApi = (endpoint, method, token, body) => {
  const url = (-1 === endpoint.indexOf(config.api.url)) ? config.api.url + endpoint : endpoint

  fetch(url, initRequest(method, token, body))
    .then(checkStatus)
    .then(response => ({
      status: response.status,
      response,
    }))
    .catch(error => Promise.reject(error))
}

// API services
export const generateToken = (grantType, extra) => callApi(`/oauth/v2/token?client_id=${config.api.clientId}&client_secret=${config.api.clientSecret}&grant_type=${grantType}${extra}`)
export const getPostsByTags = (token, tags, limit) => callApi(`/posts?tag[]=${tags.join('&tag[]=')}&itemsPerPage=${limit}&order[project_date]=DESC`, 'GET', token)
export const postForgotPassword = (token, data) => callApi('/forgot-password/', 'POST', token, data)
export const createUser = (token, data) => callApi('/users', 'POST', token, data)
