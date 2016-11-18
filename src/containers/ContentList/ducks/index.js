import { fromJS } from 'immutable'
import { getToken } from '../../../services/auth/ducks'
import { getContentsByDefault, getContentsByTags } from '../../../utils/api'

/*
Const
 */
const CONTENT_LIST_RECEIVE = 'CONTENT_LIST_RECEIVE'
const CONTENT_LIST_ERROR = 'CONTENT_LIST_ERROR'

/*
Actions
 */
const receiveSuccess = (content) => {
  return {
    type: CONTENT_LIST_RECEIVE,
    content
  }
}

const receiveError = (error) => {
  return {
    type: CONTENT_LIST_ERROR,
    error
  }
}

export const getContent = (tags = null, locale = null) => {
  return (dispatch) => {
    return getToken('client_credentials')
      .then((token) => {
        return tags ? getContentsByTags(tags, token, locale) : getContentsByDefault(token, locale)
      })
      .then((response) => {
        dispatch(receiveSuccess(response.data['hydra:member']))
      })
      .catch((response) => {
        dispatch(receiveError(response.data))
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
                 .setIn([i, 'title'], current.title)
                 .setIn([i, 'body'], current.body)
                 .setIn([i, 'image'], current.featuredMedia)
                 .setIn([i, 'slug'], current.slug)
                 .setIn([i, 'date'], current.date)
                 .setIn([i, 'latitude'], current.latitude)
                 .setIn([i, 'longitude'], current.longitude)
  }

  return state
}

export default function contentReducer(state = initialState, action) {
  switch (action.type) {
    case CONTENT_LIST_RECEIVE:
      return transform(action.content, initialState)
    default:
      return state
  }
}
