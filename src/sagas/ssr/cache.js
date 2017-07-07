import { locales } from 'config'

/*
 This file is used to store cached response during ssr
 */
const storage = {}

Object.keys(locales).map(locale => (storage[locale] = {}))

export const reset = locale => (storage[locale] = {})

export default locale => storage[locale]
