export const CONTEXT_SET_COUNTRY = 'CONTEXT_SET_COUNTRY'
export const CONTEXT_SET_LANG = 'CONTEXT_SET_LANG'
export const CONTEXT_TOGGLE_POPIN_NAV = 'CONTEXT_TOGGLE_POPIN_NAV'
export const CONTEXT_TOGGLE_POPIN_ACCOUNT = 'CONTEXT_TOGGLE_POPIN_ACCOUNT'
export const CONTEXT_CLOSE_ALL_POPIN = 'CONTEXT_CLOSE_ALL_POPIN'

export const setCountry = country => ({
  type: CONTEXT_SET_COUNTRY,
  payload: country,
})

export const setLang = lang => ({
  type: CONTEXT_SET_LANG,
  payload: lang,
})

export const togglePopinNavigation = (state = null) => ({
  type: CONTEXT_TOGGLE_POPIN_NAV,
  payload: state,
})

export const togglePopinAccount = (state = null) => ({
  type: CONTEXT_TOGGLE_POPIN_ACCOUNT,
  payload: state,
})

export const closeAllPopin = () => ({
  type: CONTEXT_CLOSE_ALL_POPIN,
})
