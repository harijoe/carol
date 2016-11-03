import { fromJS } from 'immutable'
import config from '../../../config'
import { request, getToken } from '../../../services/auth/ducks'

/*
Const and Type
 */
const PRO_LIST =  'PRO_LIST'
const PRO_LIST_FAIL = 'PRO_LIST_FAIL'

const receiveListPro = (pros) => {
  return {
    type: PRO_LIST,
    pros
  }
}

const receiveListProFAIL = () => {
  return {
    type: PRO_LIST_FAIL
  }
}

/*
Actions
 */
export const searchPro = (trade) => {
  return (dispatch) => {
    return getToken('client_credentials').then((token) => {
      const tradeQueryParam = trade ? `trade=${trade}` : ''

      return request(`${config.apiUrl}/companies?${tradeQueryParam}`, 'GET', token)
    })
      .then((response) => {
        dispatch(receiveListPro(response.data['hydra:member']))
      })
      .catch(() => {
        dispatch(receiveListProFAIL())
      })
  }
}

/*
Reducer
 */
const transformPros = (pros, state) => {
  let i
  let proCurrent = {}

  for (i = 0; i < pros.length; i++) {
    proCurrent = pros[i]
    state = state.setIn([i, 'id'], proCurrent['@id'])
    state = state.setIn([i, 'name'], proCurrent.name)
    state = state.setIn([i, 'trade'], proCurrent.trade)
  }

  return state
}

const initialState = fromJS([{
  id: null,
  name: null,
  trade: null
}])

export default function reducerPros(state = initialState, action) {
  const pros = action.pros

  switch (action.type) {
    case PRO_LIST:
      return transformPros(pros, initialState)
    default:
      return state
  }
}
