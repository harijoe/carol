import { fromJS } from 'immutable'
import { getToken, request } from '../../../services/auth/ducks'
import config from '../../../config'

/*
Const
 */
const CONTENT_RECEIVE = 'CONTENT_RECEIVE'
const CONTENT_ERROR = 'CONTENT_ERROR'

/*
Actions
 */
const receiveSuccess = (content) => {
  return {
    type: CONTENT_RECEIVE,
    content
  }
}

const receiveError = () => {
  return {
    type: CONTENT_ERROR
  }
}

export const getContent = () => {
  return (dispatch) => {
    return getToken('client_credentials')
      .then((token) => {
        return request(`${config.apiUrl}/posts`, 'GET', token)
      })
      .then((response) => {
        dispatch(receiveSuccess(response.data['hydra:member']))
      })
      .catch(() => {
        dispatch(receiveError())
      })
  }
}

/*
Reducer
 */
const initialState = fromJS([
  {
    id: 0,
    title: null,
    body: null
  }
])

const transform = (content, state) => {
  let i
  let current

  for (i = 0; i < content.length; i++) {
    current = content[i]
    state = state.setIn([i, 'id'], current['@id'])
    state = state.setIn([i, 'title'], current.title)
    state = state.setIn([i, 'body'], current.body)
  }

  return state
}

export default function contentReducer(state = initialState, action) {
  switch (action.type) {
    case CONTENT_RECEIVE:
      return transform(action.content, initialState)
    default:
      return state
  }
}
