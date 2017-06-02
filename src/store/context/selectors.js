import { defaultLocale } from 'config'
import { getLangFromLocale, getCountryFromLocale } from 'utils/locale'

export const initialState = {
  country: getCountryFromLocale(defaultLocale),
  lang: getLangFromLocale(defaultLocale),
  mainNavigation: false,
  accountNavigation: false,
  signInPopin: false,
  ssr: true,
  dryRun: false,
}

export const isSSR = (state = initialState) => state.ssr
export const isDryRun = (state = initialState) => state.dryRun
export const getLang = (state = initialState) => state.lang
export const getMainNavigation = (state = initialState) => state.mainNavigation
export const getAccountNavigation = (state = initialState) => state.accountNavigation
export const getSignInPopin = (state = initialState) => state.signInPopin
export const isPopin = (state = initialState) => state.accountNavigation || state.mainNavigation
export const getCountry = (state = initialState) => state.country
export const getLocale = (state = initialState) => `${state.lang}_${state.country}`
