import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'

const configureStore = (initialState, history) => {
  const hasWindow = typeof window !== 'undefined'
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(thunk, sagaMiddleware, routerMiddleware(history)),
      hasWindow && window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )

  return {
    ...store,
    runSaga: sagaMiddleware.run,
  }
}

export default configureStore
