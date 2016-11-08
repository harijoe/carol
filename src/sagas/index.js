import { fork } from 'redux-saga/effects'
import { watchFetchPro } from '../containers/pro/ducks'

function* rootSaga() {
  yield fork(watchFetchPro)
}

export default rootSaga
