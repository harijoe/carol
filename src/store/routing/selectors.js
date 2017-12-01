import get from 'lodash/get'
import qs from 'query-string'

export const initialState = {
  location: {},
}

export const getPathname = state => get(state, 'location.pathname')
export const getQuery = state => qs.parse(get(state, 'location.search'))
export const getSearch = state => get(state, 'location.search')
export const isHomepage = state => get(state, 'location.pathname') === '/'
export const isProHomepage = state => get(state, 'location.pathname') === '/pro'
export const isDirectoryHomepage = state => get(state, 'location.pathname') === '/directory'
export const isLandingPage = state => isHomepage(state) || isProHomepage(state) || isDirectoryHomepage(state)
export const getState = state => get(state, 'location.state') || {}
export const getRedirectPathname = state => get(state, 'location.state.redirectPathname')
