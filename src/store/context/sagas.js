import { put, select } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'react-router-redux'
import { takeLatest } from 'utils/effects'
import { fromContext } from 'store/selectors'
import { closeAllPopin, CONTEXT_TOGGLE_POPIN_NAV, CONTEXT_TOGGLE_POPIN_ACCOUNT, CONTEXT_CLOSE_ALL_POPIN } from './actions'

export function* handleLocationChange() {
  yield put(closeAllPopin())
}

export function* handlePopinChange() {
  /*
    Adds a noscroll class to the body to prevent scrolling while popin is opened
   */
  if (typeof document === 'undefined') { return }

  const isPopin = yield select(fromContext.isPopin)
  let classes = document.body.className.split(' ').filter(e => e !== '')

  if (isPopin && !classes.includes('noscroll')) {
    classes.push('noscroll')
  } else {
    classes = classes.filter(e => e !== 'noscroll')
  }

  document.body.className = classes.join(' ')
}

export default function* () {
  yield [
    takeLatest(LOCATION_CHANGE, handleLocationChange),
    takeLatest(CONTEXT_TOGGLE_POPIN_NAV, handlePopinChange),
    takeLatest(CONTEXT_TOGGLE_POPIN_ACCOUNT, handlePopinChange),
    takeLatest(CONTEXT_CLOSE_ALL_POPIN, handlePopinChange),
  ]
}
