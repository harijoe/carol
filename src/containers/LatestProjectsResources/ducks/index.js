import { fromJS } from 'immutable'
import { getContentsByTags } from '../../../utils/api'

/*
 Const
 */
const LATEST_PROJECTS_RESOURCES_RECEIVE = 'LATEST_PROJECTS_RESOURCES_RECEIVE'
const LATEST_PROJECTS_RESOURCES_ERROR = 'LATEST_PROJECTS_RESOURCES_ERROR'

/*
 Actions
 */
const receiveSuccess = (projects) => {
  return {
    type: LATEST_PROJECTS_RESOURCES_RECEIVE,
    projects
  }
}

const receiveError = (error) => {
  return {
    type: LATEST_PROJECTS_RESOURCES_ERROR,
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
  }

  return state
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LATEST_PROJECTS_RESOURCES_RECEIVE:
      return transform(action.projects, initialState)
    default:
      return state
  }
}

export default reducer
