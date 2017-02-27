export const LOCALE_SET_COUNTRY = 'LOCALE_SET_COUNTRY'
export const LOCALE_SET_LANG = 'LOCALE_SET_LANG'

export const setCountry = country => ({
  type: LOCALE_SET_COUNTRY,
  payload: country,
})

export const setLang = lang => ({
  type: LOCALE_SET_LANG,
  payload: lang,
})
