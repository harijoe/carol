import { fromJS } from 'immutable'
import { getContentsByTags } from '../../../utils/api'

/*
 Const
 */

const CONTENT_LIST_REQUEST = 'CONTENT_LIST_REQUEST'
const CONTENT_LIST_SUCCESS = 'CONTENT_LIST_SUCCESS'
const CONTENT_LIST_FAILURE = 'CONTENT_LIST_FAILURE'

/*
 Actions
 */

const onRequest = (scope) => {
  return {
    type: CONTENT_LIST_REQUEST,
    scope
  }
}

const onSuccess = (payload, scope) => {
  return {
    type: CONTENT_LIST_SUCCESS,
    scope,
    payload
  }
}

const onFailure = (error) => {
  return {
    type: CONTENT_LIST_FAILURE,
    error
  }
}

export const fetchContents = (scope, itemsPerPage = 10, tags = null) => {
  return (dispatch) => {
    dispatch(onRequest(scope))

    return getContentsByTags(tags, itemsPerPage)
      .then((response) => {
        dispatch(onSuccess(response.data['hydra:member'], scope))
      })
      .catch((response) => {
        dispatch(onFailure(response.data))
      })
  }
}

/*
 Reducer
 */

const transform = (items, list) => {
  let i
  let current

  for (i = 0; i < items.length; i++) {
    current = items[i]
    list = list
      .setIn([i, 'id'], current['@id'])
      .setIn([i, 'title'], current.title)
      .setIn([i, 'body'], current.body)
      .setIn([i, 'image'], current.featuredMedia)
      .setIn([i, 'slug'], current.slug)
      .setIn([i, 'date'], current.date)
      .setIn([i, 'tags'], current.tags)
      .setIn([i, 'latitude'], current.latitude)
      .setIn([i, 'longitude'], current.longitude)
  }

  return list
}

const initialState = fromJS({
  latestProjectsOnMap: [],
  latestProjectsResources: [],
  testimonialArticles: [],
  reinsuranceArticles: [],
})

const contentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONTENT_LIST_SUCCESS: {
      const  list = state.get(action.scope)

      return state.merge({
        [action.scope]: transform(action.payload, list)
      })
    }
    default: {
      return state
    }
  }
}

export default contentsReducer
