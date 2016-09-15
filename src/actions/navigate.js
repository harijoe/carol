import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware, push } from 'react-router-redux'
import { browserHistory } from 'react-router'
import reducers from '../reducers'

const middleware = routerMiddleware(browserHistory)
const store = createStore(
  reducers,
  applyMiddleware(middleware)
)

const navigate = (pathName) => {
  store.dispatch(push(pathName))
}

export default navigate
