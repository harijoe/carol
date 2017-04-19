import { defaultLocale } from 'config'
import { getLangFromLocale, getCountryFromLocale } from 'utils/locale'

export const initialState = {
  country: getCountryFromLocale(defaultLocale),
  lang: getLangFromLocale(defaultLocale),
  popinNavigation: false,
  popinAccount: false,
}

export const getLang = (state = initialState) => state.lang
export const getPopinNavigation = (state = initialState) => state.popinNavigation
export const getPopinAccount = (state = initialState) => state.popinAccount
export const isPopin = (state = initialState) => state.popinAccount || state.popinNavigation
export const getCountry = (state = initialState) => state.country
export const getLocale = (state = initialState) => `${state.lang}_${state.country}`
