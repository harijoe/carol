import { put, select } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { fromRouting } from 'store/selectors'

/*
  Redirects the user if he's not already on the target url
  If a prefix is given, the user will be redirected if the target does not begin by the prefix
 */
export default function* softPush(target, prefix = null) {
  const currentPath = yield select(fromRouting.getPathname)
  const currentSearch = yield select(fromRouting.getSearch)

  if (prefix && currentPath.indexOf(prefix) === 0) {
    return
  } else if (currentPath + currentSearch === target) {
    return
  }

  yield put(push(target))
}
