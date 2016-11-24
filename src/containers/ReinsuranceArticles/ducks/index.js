import { fromJS } from 'immutable'
import { getToken } from '../../../services/auth/ducks'
import { getContentsByTags } from '../../../utils/api'

/*
 Const
 */
const REINSURANCE_ARTICLES_RECEIVE = 'REINSURANCE_ARTICLES_RECEIVE'
const REINSURANCE_ARTICLES_ERROR = 'REINSURANCE_ARTICLES_ERROR'

/*
 Actions
 */
const receiveSuccess = (articles) => {
  return {
    type: REINSURANCE_ARTICLES_RECEIVE,
    articles
  }
}

const receiveError = (error) => {
  return {
    type: REINSURANCE_ARTICLES_ERROR,
    error
  }
}

export const fetchData = (tags = null, itemsPerPage = 10) => {
  return (dispatch) => {
    return getToken('client_credentials')
      .then((token) => {
        return getContentsByTags(tags, itemsPerPage, token)
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

const transform = (articles, state) => {
  let i
  let current

  for (i = 0; i < articles.length; i++) {
    current = articles[i]
    state = state.setIn([i, 'id'], current['@id'])
      .setIn([i, 'title'], current.title)
      .setIn([i, 'body'], current.body)
      .setIn([i, 'image'], current.featuredMedia)
      .setIn([i, 'slug'], current.slug)
  }

  return state
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REINSURANCE_ARTICLES_RECEIVE:
      return transform(action.articles, initialState)
    default:
      return state
  }
}

export default reducer
