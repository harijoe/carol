import uuid from 'uuid/v4'
import reactCookie from 'react-cookie'
import isAuthenticated from 'utils/auth'
import { setCountry, setLang, setAuthenticated, setProjectElaborationSessionId } from 'store/actions'
import { getLocaleFromHostname, getLangFromLocale, getCountryFromLocale } from 'utils/locale'
import config from 'config'
import { reset as resetCache } from 'sagas/ssr/cache'

export default (store, req) => {
  // Initialize locale from hostname
  const locale = getLocaleFromHostname(req.hostname)
  const lang = getLangFromLocale(locale)
  const country = getCountryFromLocale(locale)

  if (req.method === 'PURGE' && req.headers.authorization === `Bearer ${config.purgeCacheToken}`) {
    resetCache()
  }

  store.dispatch(setLang(lang))
  store.dispatch(setCountry(country))

  // Initialize auth from cookies
  const grantType = reactCookie.load('grant_type')

  store.dispatch(setAuthenticated(isAuthenticated(grantType)))

  // Initialize projectElaboration sessionId
  let sessionId = reactCookie.load('project_elaboration_session_id') || null

  if (sessionId === null) {
    sessionId = uuid()
    reactCookie.save('project_elaboration_session_id', sessionId, { path: '/', maxAge: 86400000, secure: true })
  }

  store.dispatch(setProjectElaborationSessionId(sessionId))

  return store
}