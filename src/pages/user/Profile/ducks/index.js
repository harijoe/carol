import { fromJS } from 'immutable'
import { request, getToken } from '../../../../services/auth/ducks'
import config from '../../../../config'

/*
Const
 */
const USER_INFO = 'USER_INFO'
const USER_LOGOUT = 'USER_LOGOUT'
const USER_UNAUTHORIZED = 'USER_UNAUTHORIZED'
const USER_ERROR = 'USER_ERROR'

/*
Actions
 */
const receiveUserInfo = (payload) => {
  return {
    type: USER_INFO,
    payload
  }
}

const receiveError = (statusCode) => {
  if (401 === statusCode) {
    return {
      type: USER_UNAUTHORIZED
    }
  }

  return {
    type: USER_ERROR
  }
}

export const getProfile = () => {
  return (dispatch) => {
    return getToken('password').then((token) => {
      if (null === token) {
        return {
          type: USER_UNAUTHORIZED
        }
      }

      return request(config.profileUrl, 'GET', token)
    })
      .then((response) => {
        dispatch(receiveUserInfo(response.data))
      })
      .catch((response) => {
        dispatch(receiveError(response.status))
      })
  }
}

export const updateProfile = (data, id) => {
  return (dispatch) => {
    return getToken('password').then((token) => {
      return request(`${config.baseUrl}${id}`, 'PUT', token, data)
    })
      .catch((response) => {
        dispatch(receiveError(response.status))
      })
  }
}

/*
Reducer
 */
const initialState = fromJS({
  id: null,
  phone: '',
})

const transform = (payload, state) => {
  state = state.set('phone', payload.phone || '')
  state = state.set('id', payload['@id'])

  return state
}

export default function reducerAuth(state = initialState, action) {
  switch (action.type) {
    case USER_INFO:
      return transform(action.payload, state)
    case USER_LOGOUT:
      return initialState
    default:
      return state
  }
}
