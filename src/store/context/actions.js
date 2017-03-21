export const CONTEXT_SET_COUNTRY = 'CONTEXT_SET_COUNTRY'
export const CONTEXT_SET_LANG = 'CONTEXT_SET_LANG'
export const CONTEXT_TOGGLE_FULLSCREEN_NAV = 'CONTEXT_TOGGLE_FULLSCREEN_NAV'

export const setCountry = country => ({
  type: CONTEXT_SET_COUNTRY,
  payload: country,
})

export const setLang = lang => ({
  type: CONTEXT_SET_LANG,
  payload: lang,
})

export const toggleFullscreenNavigation = (state = null) => ({
  type: CONTEXT_TOGGLE_FULLSCREEN_NAV,
  payload: state,
})
