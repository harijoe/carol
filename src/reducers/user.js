import { fromJS } from 'immutable'
import * as types from '../constants/actionTypes'

const initialState = fromJS({
  id: null,
  phone: '',
  isLogged: false
})

const transform = (payload, state) => {
  state = state.set('phone', payload.phone || '')
  state = state.set('id', payload['@id'])
  state = state.set('isLogged', true)

  return state
}

const reducerAuth = (state = initialState, action) => {
  switch (action.type) {
    case types.user.USER_INFO:
      return transform(action.payload, state)
    case types.user.USER_LOGOUT:
      return initialState
    case types.auth.AUTH_TOKEN:
      if ('password' === action.grantType) {
        return state.set('isLogged', true)
      }

      return state
    default:
      return state
  }
}

export default reducerAuth
