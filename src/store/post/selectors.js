import { fromJS } from 'immutable'

export const initialState = fromJS({
  latestProjectsOnMap: [],
  latestProjectsResources: [],
  testimonialArticles: [],
  reinsuranceArticles: [],
})

export const getList = (state = initialState, scope) => {
  return state.get(scope) || []
}
