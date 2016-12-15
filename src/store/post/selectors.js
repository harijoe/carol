import { fromJS } from 'immutable'

export const initialState = fromJS({
  latestProjectsOnMap: [],
  latestProjectsResources: [],
  testimonialArticles: [],
  reinsuranceArticles: [],
})

export const getList = (state = initialState) => state.list || []
