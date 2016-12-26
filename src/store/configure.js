import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import sagas from './sagas'

const configureStore = (initialState, history) => {
  const hasWindow = 'undefined' !== typeof window
  const sagaMiddleware = createSagaMiddleware()

  const finalCreateStore = compose(
    applyMiddleware(thunk, sagaMiddleware, routerMiddleware(history)),
    hasWindow && window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore)

  const store = finalCreateStore(reducer, initialState)

  sagaMiddleware.run(sagas)

  return store
}

export default configureStore