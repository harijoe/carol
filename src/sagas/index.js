import { fork } from 'redux-saga/effects'
import { watchSearchPros } from '../containers/pro/ProList/ducks'
import { watchGetPro } from '../containers/pro/Pro/ducks'

function* rootSaga() {
  yield fork(watchSearchPros)
  yield fork(watchGetPro)
}

export default rootSaga
