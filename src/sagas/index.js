import { fork } from 'redux-saga/effects'
import { watchSearchPros } from '../containers/pro/ProList/ducks'
import { watchGetPro } from '../containers/pro/Pro/ducks'
import { watchGetToken } from '../utils/token'

function* rootSaga() {
  yield fork(watchSearchPros)
  yield fork(watchGetPro)
  yield fork(watchGetToken)
}

export default rootSaga
