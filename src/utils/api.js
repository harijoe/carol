import axios from 'axios'
import { getCurrentLocale } from './locale'
import config from '../config'

const callApi = (endpoint, method = 'GET', accessToken = null, data = null) => {
  const url = (-1 === endpoint.indexOf(config.apiUrl)) ? config.apiUrl + endpoint : endpoint
  const headers = {
    Accept: 'application/ld+json'
  }
  const locale = getCurrentLocale()
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
export const getContentsByTags = (tags, itemsPerPage, accessToken) => { return callApi(`/posts?tag[]=${tags.join('&tag[]=')}&itemsPerPage=${itemsPerPage}&order[project_date]=DESC`, 'GET', accessToken) }
export const postForgotPassword = (accessToken, data) => { return callApi('/forgot-password/', 'POST', accessToken, data) }
export const createUser = (accessToken, data) => { return callApi('/users', 'POST', accessToken, data) }
