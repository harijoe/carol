import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { Provider } from 'react-redux'
import { RouterContext } from 'react-router'
import { join } from 'redux-saga/effects'
import sagas from 'store/sagas'
import { list as sagaList, clear as sagaClear } from '../../src/sagas/ssr/collector'

export default async function (store, renderProps) {
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

  /*
    This waits for the completion of all the sagas found in the component tree
   */
  function* initSaga(forks) {
    const startupTasks = yield forks

    if (startupTasks.length === 0) {
      return
    }

    yield join(...startupTasks)
  }

  const task = store.runSaga(initSaga, sagaList())

  return task.done
    .then(sagaClear)
    .then(appListenersTask.cancel)
}
