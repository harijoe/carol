import get from 'lodash/get'

export const initialState = {
  locationBeforeTransitions: null,
}

// eslint-disable-next-line import/prefer-default-export
export const getPathname = state => get(state, 'locationBeforeTransitions.pathname')
export const getQuery = state => get(state, 'locationBeforeTransitions.query') || {}
export const getSearch = state => get(state, 'locationBeforeTransitions.search')
export const isHomepage = state => get(state, 'locationBeforeTransitions.pathname') === '/'
export const getState = state => get(state, 'locationBeforeTransitions.state') || {}
export const getRedirectPathname = state => get(state, 'locationBeforeTransitions.state.redirectPathname')
