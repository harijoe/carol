import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from '../store/reducer'

const configureStore = history => {
  const sagaMiddleware = createSagaMiddleware()
  const initialState = window.__INITIAL_STATE__ // eslint-disable-line no-underscore-dangle

  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(thunk, sagaMiddleware, routerMiddleware(history)),
    ),
  )

  return {
    ...store,
    runSaga: sagaMiddleware.run,
  }
}

export default configureStore
