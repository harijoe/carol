import * as types from '../constants/actionTypes'

const transform = (user) => {
  return {
    phone: user.phone ? user.phone : '',
    '@id': user['@id']
  }
}

const reducerAuth = (state = null, action) => {
  switch (action.type) {
    case types.user.USER_INFO:
      return transform(action.payload)
    case types.user.USER_UNAUTHORIZED:
      return {
        authorized: false
      }
    default:
      return state
  }
}

export default reducerAuth