import { put, select } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'react-router-redux'
import { takeLatest } from 'utils/effects'
import { fromContext } from 'store/selectors'
import cookie from 'services/cookies'
import { closeAll, showCookiesBanner, CONTEXT_TOGGLE_MAIN_NAVIGATION, CONTEXT_TOGGLE_ACCOUNT_NAVIGATION, CONTEXT_CLOSE_ALL, CONTEXT_SHOW_COOKIES_BANNER } from './actions'

export function* handleLocationChange() {
  yield put(closeAll())
}

export function* handlePopinChange() {
  /*
    Adds a noscroll class to the body to prevent scrolling while popin is opened
   */
  if (typeof document === 'undefined') {
    return
  }

  const isPopin = yield select(fromContext.isPopin)
  let classes = document.body.className.split(' ').filter(e => e !== '')

  if (isPopin && !classes.includes('noscroll')) {
    classes.push('noscroll')
  } else {
    classes = classes.filter(e => e !== 'noscroll')
  }

  document.body.className = classes.join(' ')
}

const handleShowCookiesBanner = (show) => {
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

export default function*() {
  yield [
    takeLatest(LOCATION_CHANGE, handleLocationChange),
    takeLatest(CONTEXT_TOGGLE_MAIN_NAVIGATION, handlePopinChange),
    takeLatest(CONTEXT_SHOW_COOKIES_BANNER, handleShowCookiesBanner),
    takeLatest('INITIATED', initiateCookiesBanner),
    takeLatest(CONTEXT_TOGGLE_ACCOUNT_NAVIGATION, handlePopinChange),
    takeLatest(CONTEXT_CLOSE_ALL, handlePopinChange),
  ]
}
