import { fromJS } from 'immutable'
import { getToken } from '../../../services/auth/ducks'
import { getContentsByTags } from '../../../utils/api'

/*
 Const
 */
const LATEST_PROJECTS_ON_MAP_RECEIVE = 'LATEST_PROJECTS_ON_MAP_RECEIVE'
const LATEST_PROJECTS_ON_MAP_ERROR = 'LATEST_PROJECTS_ON_MAP_ERROR'

/*
 Actions
 */
const receiveSuccess = (projects) => {
  return {
    type: LATEST_PROJECTS_ON_MAP_RECEIVE,
    projects
  }
}

const receiveError = (error) => {
  return {
    type: LATEST_PROJECTS_ON_MAP_ERROR,
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

const transform = (projects, state) => {
  let i
  let current

  for (i = 0; i < projects.length; i++) {
    current = projects[i]
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LATEST_PROJECTS_ON_MAP_RECEIVE:
      return transform(action.projects, initialState)
    default:
      return state
  }
}

export default reducer
