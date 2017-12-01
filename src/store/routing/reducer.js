import set from 'lodash/set'
import { routerReducer } from 'react-router-redux'
import { initialState } from './selectors'
import { ROUTING_SET_REDIRECT_PATHNAME } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case ROUTING_SET_REDIRECT_PATHNAME: {
      return set(state, ['location', 'state', 'redirectPathname'], action.payload)
    }
    default: {
      return routerReducer(state, action)
    }
  }
}
