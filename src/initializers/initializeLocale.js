import fr from 'react-intl/locale-data/fr'
import en from 'react-intl/locale-data/en'
import es from 'react-intl/locale-data/es'
import { addLocaleData } from 'react-intl'
import { getLocaleFromHostname, getLangFromLocale, getCountryFromLocale } from 'utils/locale'
import { setCountry, setLang } from 'store/actions'

export default store => {
  const locale = getLocaleFromHostname(window.location.hostname)

  store.dispatch(setCountry(getCountryFromLocale(locale)))

  const lang = getLangFromLocale(locale)
  store.dispatch(setLang(lang))

  addLocaleData([...es, ...en, ...fr])
}
