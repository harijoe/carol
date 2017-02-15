import { defaultLocale, hostnamesLocales } from 'config'
import translations from 'translations'

const window = require('utils/windowOrGlobal')

export const getCurrentLocale = () => (typeof window.location !== 'undefined' ? hostnamesLocales[window.location.hostname] || defaultLocale : defaultLocale)
export const getCurrentLanguage = () => getCurrentLocale().split('_')[0]
export const getCurrentCountry = () => getCurrentLocale().split('_')[1]
export const getCurrentMessages = () => translations[getCurrentLanguage()]
