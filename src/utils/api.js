import axios from 'axios'
import { getToken } from './token'
import { getCurrentLocale } from './locale'
import config from '../config'

const callApi = (endpoint, method = 'GET', token = null, data = null) => {
  const url = (-1 === endpoint.indexOf(config.apiUrl)) ? config.apiUrl + endpoint : endpoint
  const headers = {
    Accept: 'application/ld+json'
  }
  const locale = getCurrentLocale()
  const setHeaders = () => {
    if (token) { headers.Authorization = `Bearer ${token}` }
    if (locale) { headers['Accept-Language'] = locale }

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
export const getContentsByTags = (tags, itemsPerPage) => { return getToken().then((token) => { return callApi(`/posts?tag[]=${tags.join('&tag[]=')}&itemsPerPage=${itemsPerPage}&order[project_date]=DESC`, 'GET', token) }) }
export const postForgotPassword = (data) => { return getToken().then((token) => { return callApi('/forgot-password/', 'POST', token, data) }) }
export const createUser = (data) => { return getToken().then((token) => { return callApi('/users', 'POST', token, data) }) }
