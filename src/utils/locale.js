import { defaultLocale, locales } from 'config'
import hostNameFromUrl from './hostNameFromUrl'

export const getLocaleFromHostname = hostname =>
  Object.keys(locales).find(locale => hostNameFromUrl(locales[locale].url) === hostname) || defaultLocale
export const getUrlFromLocale = locale => locales[locale].url
export const getLangFromLocale = locale => locale.split('-')[0]
export const getCountryFromLocale = locale => locale.split('-')[1]
