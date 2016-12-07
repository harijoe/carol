import { defaultLocale, hostnamesLocales } from '../config'
import translations from '../translations'

export const getCurrentLocale = () => {
  return hostnamesLocales[window.location.hostname] || defaultLocale
}

export const getCurrentLanguage = () => {
  return getCurrentLocale().split('_')[0]
}

export const getCurrentCountry = () => {
  return getCurrentLocale().split('_')[1]
}

export const getCurrentMessages = () => {
  return translations[getCurrentLanguage()]
}
