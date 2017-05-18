import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { Provider } from 'react-redux'
import { RouterContext } from 'react-router'
import { join, race, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import sagas, { handleAuthLoginRequest } from 'store/sagas'
import { setDryRun } from 'store/actions'
import { list as sagaList, clear as sagaClear } from '../../src/sagas/ssr/collector'

export default async function initSagas(store, renderProps, disableTimeout = false) {
  store.dispatch(setDryRun(true))

  const appListenersTask = store.runSaga(sagas)

  /*
    This rendering is used to trigger sagas which are created in some components (usually in componentWillMount)
    All of the sagas are collected in a custom collector
   */
  sagaClear()
  renderToStaticMarkup(
    <Provider store={store}>
      <RouterContext {...renderProps} />
    </Provider>
  )

  function* getToken() {
    const tokenTimeout = 10000

    const { timeout } = yield race({
      main: call(handleAuthLoginRequest),
      timeout: call(delay, tokenTimeout),
    })

    if (timeout) {
      throw new Error('Fatal - Timeout for token retrieval reached - ', tokenTimeout / 1000, 's')
    }
  }

  /*
    This waits for the completion of all the sagas found in the component tree
   */
  function* initSaga(forks) {
    const startupTasks = yield forks

    if (startupTasks.length === 0) {
      return
    }

    if (disableTimeout) {
      yield join(...startupTasks)
    } else {
      const startupCallsTimeout = 500

      const { timeout } = yield race({
        main: join(...startupTasks),
        timeout: call(delay, startupCallsTimeout),
      })

      if (timeout) {
        console.error('Timeout for startup calls reached - ', startupCallsTimeout / 1000, 's')
      }
    }
  }

  store.dispatch(setDryRun(false))

  const task = store.runSaga(getToken)

  return task.done
    .then(() => store.runSaga(initSaga, sagaList()).done)
    .then(sagaClear)
    .then(appListenersTask.cancel)
    .then(() => console.info('SSR OK'))
    .catch(e => console.error(`SSR FAILED - ${e.toString()}`))
}
