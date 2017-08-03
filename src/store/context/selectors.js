import { defaultLocale } from 'config'
import { getLangFromLocale, getCountryFromLocale } from 'utils/locale'

export const initialState = {
  country: getCountryFromLocale(defaultLocale),
  lang: getLangFromLocale(defaultLocale),
  mainNavigation: false,
  accountNavigation: false,
  signInPopin: false,
  chatbotPopin: {
    enabled: false,
    mode: 'signin',
  },
  ssr: true,
  dryRun: false,
  features: {},
  initialQueryParams: {},
}

export const isSSR = (state = initialState) => state.ssr
export const isDryRun = (state = initialState) => state.dryRun
export const getLang = (state = initialState) => state.lang
export const getMainNavigation = (state = initialState) => state.mainNavigation
export const getAccountNavigation = (state = initialState) => state.accountNavigation
export const getSignInPopin = (state = initialState) => state.signInPopin
export const getChatbotPopin = (state = initialState) => state.chatbotPopin.enabled
export const getChatbotPopinMode = (state = initialState) => state.chatbotPopin.mode
export const isPopin = (state = initialState) => state.accountNavigation || state.mainNavigation
export const getCountry = (state = initialState) => state.country
export const getLocale = (state = initialState) => `${state.lang}-${state.country}`
export const isFeatureEnabled = (state = initialState, feature) => !!state.features[feature]
export const getInitialQueryParams = (state = initialState) => state.initialQueryParams
