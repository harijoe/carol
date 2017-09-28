import { setCountry, setLang } from 'store/actions'
import { getLocaleFromHostname, getLangFromLocale, getCountryFromLocale } from 'utils/locale'

export default (store, req) => {
  // Initialize locale from hostname
  const locale = getLocaleFromHostname(req.hostname)
  const lang = getLangFromLocale(locale)
  const country = getCountryFromLocale(locale)

  // Set lang and country
  store.dispatch(setLang(lang))
  store.dispatch(setCountry(country))

  return store
}
