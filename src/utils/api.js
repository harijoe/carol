import axios from 'axios'
import config from '../config'

const callApi = (endpoint, method = 'GET', locale = null, accessToken = null, data = null) => {
  const url = (-1 === endpoint.indexOf(config.apiUrl)) ? config.apiUrl + endpoint : endpoint
  const headers = {
    Accept: 'application/ld+json'
  }
  const setHeaders = () => {
    if (accessToken) {
      headers.Authorization = `Bearer ${accessToken}`
    }

    if (locale) {
      headers['Accept-Language'] = locale
    }

    return headers
  }

  return axios({
    url,
    timeout: config.timeout,
    method,
    responseType: 'json',
    data,
    headers: setHeaders()
  })
}

// API services
export const generateToken = (grantType, extra) => { return callApi(`/oauth/v2/token?client_id=${config.clientId}&client_secret=${config.clientSecret}&grant_type=${grantType}${extra}`) }
export const getContentsByDefault = (accessToken, locale) => { return callApi('/posts', 'GET', locale, accessToken) }
export const getContentsByTags = (tags, accessToken, locale) => { return callApi(`/posts?tag[]=${tags.join('&tag[]=')}&order[project_date]=DESC`, 'GET', locale, accessToken) }
