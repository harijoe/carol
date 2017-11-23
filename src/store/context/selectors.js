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
    mode: 'signup',
  },
  phoneValidationPopin: {
    enabled: false,
    mode: 'phone',
  },
  emailValidationPopin: false,
  ssr: true,
  dryRun: false,
  features: {},
  initialQueryParams: {},
  searchModalIsOpen: false,
  showCookieBanner: false,
}

export const isSSR = (state = initialState) => state.ssr
export const isDryRun = (state = initialState) => state.dryRun
export const getLang = (state = initialState) => state.lang
export const getMainNavigation = (state = initialState) => state.mainNavigation
export const getAccountNavigation = (state = initialState) => state.accountNavigation
export const getSignInPopin = (state = initialState) => state.signInPopin
export const getChatbotPopin = (state = initialState) => state.chatbotPopin.enabled
export const getChatbotPopinMode = (state = initialState) => state.chatbotPopin.mode
export const getPhoneValidationPopin = (state = initialState) => state.phoneValidationPopin.enabled
export const getPhoneValidationPopinMode = (state = initialState) => state.phoneValidationPopin.mode
export const getEmailValidationPopin = (state = initialState) => state.emailValidationPopin
export const isPopin = (state = initialState) =>
  [
    state.mainNavigation,
    state.accountNavigation,
    state.signInPopin,
    state.chatbotPopin.enabled,
    state.phoneValidationPopin.enabled,
    state.emailValidationPopin,
  ].some(value => value)
export const getCountry = (state = initialState) => state.country
export const getLocale = (state = initialState) => `${state.lang}-${state.country}`
export const isFeatureEnabled = (state = initialState, feature) => !!state.features[feature]
export const getFeatures = state => state.features
export const getInitialQueryParams = (state = initialState) => state.initialQueryParams
export const searchModalIsOpen = (state = initialState) => state.searchModalIsOpen
export const showCookiesBanner = (state = initialState) => state.showCookiesBanner
