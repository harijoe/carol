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
  gender: '',
  firstName: '',
  lastName: '',
  mobilePhone: '',
  fixedPhone: '',
  address: '',
  zipCode: ''
})

const transform = (payload, state) => {
  state = state.set('gender', payload.gender || '')
  state = state.set('firstName', payload.firstName || '')
  state = state.set('lastName', payload.lastName || '')
  state = state.set('mobilePhone', payload.mobilePhone || '')
  state = state.set('fixedPhone', payload.fixedPhone || '')
  state = state.set('address', payload.address || '')
  state = state.set('zipCode', payload.zipCode || '')
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
