import { defaultLocale, locales } from 'config'

export const getLocaleFromHostname = hostname => Object.keys(locales).find(locale => locales[locale].url.split('://')[1] === hostname) || defaultLocale
export const getUrlFromLocale = locale => locale.url
export const getLangFromLocale = locale => locale.split('_')[0]
export const getCountryFromLocale = locale => locale.split('_')[1]
