import { fromJS } from 'immutable'
import { getContentsByTags } from '../../../utils/api'

/*
 Const
 */
const TESTIMONIAL_ARTICLES_RECEIVE = 'TESTIMONIAL_ARTICLES_RECEIVE'
const TESTIMONIAL_ARTICLES_ERROR = 'TESTIMONIAL_ARTICLES_ERROR'

/*
 Actions
 */
const receiveSuccess = (articles) => {
  return {
    type: TESTIMONIAL_ARTICLES_RECEIVE,
    articles
  }
}

const receiveError = (error) => {
  return {
    type: TESTIMONIAL_ARTICLES_ERROR,
    error
  }
}

export const fetchData = (tags = null, itemsPerPage = 10) => {
  return (dispatch) => {
    return getContentsByTags(tags, itemsPerPage)
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
      .setIn([i, 'tags'], current.tags)
  }

  return state
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TESTIMONIAL_ARTICLES_RECEIVE:
      return transform(action.articles, initialState)
    default:
      return state
  }
}

export default reducer
