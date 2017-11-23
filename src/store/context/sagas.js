import { put, select, all } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'react-router-redux'
import { takeLatest } from 'utils/effects'
import { fromContext } from 'store/selectors'
import cookie from 'services/cookies'
import { CLIENT_INITIATED } from 'store/actions'
import parseLocationSearch from 'utils/parseLocationSearch'
import {
  closeAll,
  showCookiesBanner,
  CONTEXT_TOGGLE_MAIN_NAVIGATION,
  CONTEXT_TOGGLE_ACCOUNT_NAVIGATION,
  CONTEXT_TOGGLE_SIGN_IN_POPIN,
  CONTEXT_TOGGLE_CHATBOT_POPIN,
  CONTEXT_TOGGLE_PHONE_VALIDATION_POPIN,
  CONTEXT_TOGGLE_EMAIL_VALIDATION_POPIN,
  CONTEXT_CLOSE_ALL,
  CONTEXT_SHOW_COOKIES_BANNER,
  enableFeature,
  setSSR,
  setInitialQueryParams,
} from './actions'

export function* handleLocationChange() {
  const showCookieBanner = yield select(fromContext.showCookiesBanner)

  if (showCookieBanner) {
    yield put(showCookiesBanner(false))
    cookie.set('cookies_banner_hidden', true)
  }

  yield put(closeAll())
}

/*
  Adds a noscroll attribute to the html root element to prevent scrolling while popin is opened
 */
export function* handlePopinChange() {
  if (typeof document === 'undefined') {
    return
  }

  const isPopin = yield select(fromContext.isPopin)
  if (isPopin) {
    document.documentElement.setAttribute('mobile-no-scroll', '')
  } else {
    document.documentElement.removeAttribute('mobile-no-scroll')
  }
}

const handleShowCookiesBanner = show => {
  if (show) {
    cookie.set('cookies_banner_hidden', true)
  } else {
    cookie.delete('cookies_banner_hidden')
  }
}

function* initiateCookiesBanner() {
  if (!cookie.get('cookies_banner_hidden')) {
    yield put(showCookiesBanner(true))
  }

  cookie.set('cookies_banner_hidden', true)
}

function* handleEnableFeature(feature) {
  yield put(enableFeature(feature.trim()))
}

function* handleClientInitiated() {
  yield put(setSSR(false))

  // Initialize feature flags from cookies
  const features = cookie.get('features')

  if (features != null) {
    yield all(features.split(',').map(feature => handleEnableFeature(feature)))
  }

  // Initialize query params
  const queryParams = parseLocationSearch(location.search)

  yield put(setInitialQueryParams(queryParams))
}

export default function* () {
  yield [
    takeLatest(CLIENT_INITIATED, handleClientInitiated),
    takeLatest(LOCATION_CHANGE, handleLocationChange),
    takeLatest(CONTEXT_TOGGLE_MAIN_NAVIGATION, handlePopinChange),
    takeLatest(CONTEXT_TOGGLE_SIGN_IN_POPIN, handlePopinChange),
    takeLatest(CONTEXT_TOGGLE_CHATBOT_POPIN, handlePopinChange),
    takeLatest(CONTEXT_TOGGLE_PHONE_VALIDATION_POPIN, handlePopinChange),
    takeLatest(CONTEXT_TOGGLE_EMAIL_VALIDATION_POPIN, handlePopinChange),
    takeLatest(CONTEXT_SHOW_COOKIES_BANNER, handleShowCookiesBanner),
    takeLatest(CLIENT_INITIATED, initiateCookiesBanner),
    takeLatest(CONTEXT_TOGGLE_ACCOUNT_NAVIGATION, handlePopinChange),
    takeLatest(CONTEXT_CLOSE_ALL, handlePopinChange),
  ]
}
