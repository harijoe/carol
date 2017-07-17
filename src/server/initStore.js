import reactCookie from 'services/cookies'
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
import generateSessionId from 'utils/generateSessionId'
import { saveProjectElaborationIdInCookies } from 'store/utils'

export default (store, req) => {
  // Initialize locale from hostname
  const locale = getLocaleFromHostname(req.hostname)
  const lang = getLangFromLocale(locale)
  const country = getCountryFromLocale(locale)

  // Set lang and country
  store.dispatch(setLang(lang))
  store.dispatch(setCountry(country))

  // Initialize auth from cookies
  const grantType = reactCookie.get('grant_type')

  // Initialize feature flags from cookies
  const features = reactCookie.get('features')

  if (features != null) {
    features.split(',').map(feature => store.dispatch(enableFeature(feature.trim())))
  }

  // Initialize query params
  store.dispatch(setInitialQueryParams(req.query))

  // Handle authentication
  store.dispatch(setAuthenticated(isAuthenticated(grantType)))

  // Initialize projectElaboration sessionId
  const sessionId = reactCookie.get('project_elaboration_session_id') || generateSessionId()

  saveProjectElaborationIdInCookies(sessionId)

  store.dispatch(setProjectElaborationSessionId(sessionId))

  return store
}
