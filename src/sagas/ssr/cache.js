/*
 This file is used to store cached response during ssr
 */
const storage = {}

export const reset = locale => (storage[locale] = {})

export default locale => storage[locale]
