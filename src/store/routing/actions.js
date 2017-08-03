export const ROUTING_SET_REDIRECT_PATHNAME = 'ROUTING_SET_REDIRECT_PATHNAME'

export const setRedirectPathname = redirectPathname => ({
  type: ROUTING_SET_REDIRECT_PATHNAME,
  payload: redirectPathname,
})
