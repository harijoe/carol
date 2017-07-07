export const CONTEXT_ENABLE_FEATURE = 'CONTEXT_ENABLE_FEATURE'
export const CONTEXT_SET_COUNTRY = 'CONTEXT_SET_COUNTRY'
export const CONTEXT_SET_LANG = 'CONTEXT_SET_LANG'
export const CONTEXT_TOGGLE_MAIN_NAVIGATION = 'CONTEXT_TOGGLE_MAIN_NAVIGATION'
export const CONTEXT_TOGGLE_ACCOUNT_NAVIGATION = 'CONTEXT_TOGGLE_ACCOUNT_NAVIGATION'
export const CONTEXT_TOGGLE_SIGN_IN_POPIN = 'CONTEXT_TOGGLE_SIGN_IN_POPIN'
export const CONTEXT_CLOSE_ALL = 'CONTEXT_CLOSE_ALL'
export const CONTEXT_SET_SSR = 'CONTEXT_SET_SSR'
export const CONTEXT_SET_DRY_RUN = 'CONTEXT_SET_DRY_RUN'

export const setCountry = country => ({
  type: CONTEXT_SET_COUNTRY,
  payload: country,
})

export const setLang = lang => ({
  type: CONTEXT_SET_LANG,
  payload: lang,
})

export const enableFeature = feature => ({
  type: CONTEXT_ENABLE_FEATURE,
  payload: feature,
})

export const toggleMainNavigation = (state = null) => ({
  type: CONTEXT_TOGGLE_MAIN_NAVIGATION,
  payload: state,
})

export const setSSR = ssr => ({
  type: CONTEXT_SET_SSR,
  payload: ssr,
})

export const setDryRun = dryRun => ({
  type: CONTEXT_SET_DRY_RUN,
  payload: dryRun,
})

export const toggleAccountNavigation = (state = null) => ({
  type: CONTEXT_TOGGLE_ACCOUNT_NAVIGATION,
  payload: state,
})

export const toggleSignInPopin = (state = null) => ({
  type: CONTEXT_TOGGLE_SIGN_IN_POPIN,
  payload: state,
})

export const closeAll = () => ({
  type: CONTEXT_CLOSE_ALL,
})
