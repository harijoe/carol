import { select } from 'redux-saga/effects'
import { fromContext } from 'store/selectors'
import { add as addSaga } from './collector'

export default saga => function* ({ ...params }) {
  const ssr = yield select(fromContext.isSSR)

  /*
   We prevent the components from triggering sagas on SSR, because initial calls
   are all handled altogether. We store them in a collector on this purpose
   */
  if (ssr) {
    addSaga(saga, params)

    return
  }

  yield* saga(params)
}
