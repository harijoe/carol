// eslint-disable-next-line import/prefer-default-export
export const getPathname = state => state.locationBeforeTransitions.pathname
export const isHomepage = state => state.locationBeforeTransitions.pathname === '/'
