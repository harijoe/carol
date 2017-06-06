// eslint-disable-next-line import/prefer-default-export
export const getPathname = state => state.locationBeforeTransitions.pathname
export const getQuery = state => state.locationBeforeTransitions.query
export const getSearch = state => state.locationBeforeTransitions.search
export const isHomepage = state => state.locationBeforeTransitions.pathname === '/'
export const getState = state => state.locationBeforeTransitions.state || {}
