export const CONTEXT_ENABLE_FEATURE = 'CONTEXT_ENABLE_FEATURE'
export const CONTEXT_SET_COUNTRY = 'CONTEXT_SET_COUNTRY'
export const CONTEXT_SET_LANG = 'CONTEXT_SET_LANG'
export const CONTEXT_TOGGLE_MAIN_NAVIGATION = 'CONTEXT_TOGGLE_MAIN_NAVIGATION'
export const CONTEXT_TOGGLE_ACCOUNT_NAVIGATION = 'CONTEXT_TOGGLE_ACCOUNT_NAVIGATION'
export const CONTEXT_TOGGLE_SIGN_IN_POPIN = 'CONTEXT_TOGGLE_SIGN_IN_POPIN'
export const CONTEXT_TOGGLE_CHATBOT_POPIN = 'CONTEXT_TOGGLE_CHATBOT_POPIN'
export const CONTEXT_TOGGLE_CHATBOT_POPIN_MODE = 'CONTEXT_TOGGLE_CHATBOT_POPIN_MODE'
export const CONTEXT_TOGGLE_PHONE_VALIDATION_POPIN = 'CONTEXT_TOGGLE_PHONE_VALIDATION_POPIN'
export const CONTEXT_TOGGLE_EMAIL_VALIDATION_POPIN = 'CONTEXT_TOGGLE_EMAIL_VALIDATION_POPIN'
export const CONTEXT_SET_PHONE_VALIDATION_POPIN_MODE = 'CONTEXT_SET_PHONE_VALIDATION_POPIN_MODE'
export const CONTEXT_CLOSE_ALL = 'CONTEXT_CLOSE_ALL'
export const CONTEXT_SET_SSR = 'CONTEXT_SET_SSR'
export const CONTEXT_SET_DRY_RUN = 'CONTEXT_SET_DRY_RUN'
export const CONTEXT_SET_INITIAL_QUERY_PARAMS = 'CONTEXT_SET_INITIAL_QUERY_PARAMS'
export const CONTEXT_REMOVE_INITIAL_QUERY_PARAM = 'CONTEXT_REMOVE_INITIAL_QUERY_PARAM'
export const CONTEXT_TOGGLE_SEARCH_MODAL = 'CONTEXT_TOGGLE_SEARCH_MODAL'

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

export const setInitialQueryParams = queryParams => ({
  type: CONTEXT_SET_INITIAL_QUERY_PARAMS,
  payload: queryParams,
})

export const removeInitialQueryParam = queryParam => ({
  type: CONTEXT_REMOVE_INITIAL_QUERY_PARAM,
  payload: queryParam,
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

export const toggleChatbotPopin = (state = null) => ({
  type: CONTEXT_TOGGLE_CHATBOT_POPIN,
  payload: state,
})

export const toggleChatbotPopinMode = () => ({
  type: CONTEXT_TOGGLE_CHATBOT_POPIN_MODE,
})

export const togglePhoneValidationPopin = () => ({
  type: CONTEXT_TOGGLE_PHONE_VALIDATION_POPIN,
})

export const setPhoneValidationPopinMode = state => ({
  type: CONTEXT_SET_PHONE_VALIDATION_POPIN_MODE,
  payload: state,
})

export const toggleEmailValidationPopin = () => ({
  type: CONTEXT_TOGGLE_EMAIL_VALIDATION_POPIN,
})

export const closeAll = () => ({
  type: CONTEXT_CLOSE_ALL,
})

export const toggleSearchModal = (state = null) => ({
  type: CONTEXT_TOGGLE_SEARCH_MODAL,
  payload: state,
})
