import { hostnamesLocales, defaultLocale } from '../config'

export const getCurrentLocale = () => {
  return 'undefined' !== typeof window ? hostnamesLocales[window.location.hostname] : defaultLocale
}

export const getCurrentLanguage = () => {
  return getCurrentLocale().split('_')[0]
}

export const getCurrentCountry = () => {
  return getCurrentLocale().split('_')[1]
}
