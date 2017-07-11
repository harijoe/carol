import uuid from 'uuid/v4'
import reactCookie from 'react-cookie'
import isAuthenticated from 'utils/auth'
import {
  setCountry,
  setLang,
  setAuthenticated,
  setProjectElaborationSessionId,
  enableFeature,
  setInitialQueryParams,
} from 'store/actions'
import { getLocaleFromHostname, getLangFromLocale, getCountryFromLocale } from 'utils/locale'

export default (store, req) => {
  // Initialize locale from hostname
  const locale = getLocaleFromHostname(req.hostname)
  const lang = getLangFromLocale(locale)
  const country = getCountryFromLocale(locale)

  // Set lang and country
  store.dispatch(setLang(lang))
  store.dispatch(setCountry(country))

  // Initialize auth from cookies
  const grantType = reactCookie.load('grant_type')

  // Initialize feature flags from cookies
  const features = reactCookie.load('features')

  if (features != null) {
    features.split(',').map(feature => store.dispatch(enableFeature(feature.trim())))
  }

  // Initialize query params
  store.dispatch(setInitialQueryParams(req.query))

  // Handle authentication
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
