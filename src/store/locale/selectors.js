import { defaultLocale } from 'config'
import { getLangFromLocale, getCountryFromLocale } from 'utils/locale'

export const initialState = {
  country: getCountryFromLocale(defaultLocale),
  lang: getLangFromLocale(defaultLocale),
}

export const getLang = (state = initialState) => state.lang
export const getCountry = (state = initialState) => state.country
export const getLocale = (state = initialState) => `${state.lang}_${state.country}`
