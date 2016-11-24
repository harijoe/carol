import { fromJS } from 'immutable'
import { request, getToken } from '../../../../services/auth/ducks'
import config from '../../../../config'
import transformErrors from '../../../../utils/transformErrors'

/*
 Const
 */

/** global: USER_INFO */
const USER_INFO = 'USER_INFO'

/** global: USER_UPDATE */
const USER_UPDATE = 'USER_UPDATE'

/** global: USER_LOGOUT */
const USER_LOGOUT = 'USER_LOGOUT'

/** global: USER_UNAUTHORIZED */
const USER_UNAUTHORIZED = 'USER_UNAUTHORIZED'

/** global: USER_ERROR */
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
/*
 Actions
 */
const receiveUserUpdated = (payload) => {
  return {
    type: USER_UPDATE,
    payload
  }
}

const receiveError = ({ status, data }, payloadRequest) => {
  if (401 === status) {
    return {
      type: USER_UNAUTHORIZED
    }
  }

  return {
    type: USER_ERROR,
    payload: data,
    payloadRequest
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
        dispatch(receiveError(response))
      })
  }
}

export const updateProfile = (data, id) => {
  return (dispatch) => {
    return getToken('password').then((token) => {
      return request(`${config.apiUrl}${id}`, 'PUT', token, data)
    })
      .then(() => {
        dispatch(receiveUserUpdated(data))
      })
      .catch((response) => {
        dispatch(receiveError(response, data))
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
  zipCode: '',
  errors: []
})

const transform = ({
    gender = '',
    firstName = '',
    lastName = '',
    mobilePhone = '',
    fixedPhone = '',
    address = '',
    zipCode = '',
    id = '',
    errors = []
  }, state) => {
  return state.set('gender', gender)
    .set('firstName', firstName)
    .set('lastName', lastName)
    .set('mobilePhone', mobilePhone)
    .set('fixedPhone', fixedPhone)
    .set('address', address)
    .set('zipCode', zipCode)
    .set('id', id || state.get('id'))
    .set('errors', transformErrors(errors))
}

export default function reducerAuth(state = initialState, action) {
  const payload = action.payload

  switch (action.type) {
    case USER_UPDATE:
      return transform(Object.assign(
          payload,
          { errors: [] }
        ),
        state)
    case USER_INFO:
      payload.id = payload['@id']
      delete payload['@id']

      return transform(action.payload, state)
    case USER_LOGOUT:
      return initialState
    case USER_ERROR:
      return transform(Object.assign(
          action.payloadRequest,
          { errors: payload.violations ? payload.violations : [{ message: 'server_error' }] }
        ),
        state)
    default:
      return state
  }
}
