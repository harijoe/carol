export const SEARCH_ENGINE_SEARCH = 'SEARCH_ENGINE_SEARCH'
export const SEARCH_ENGINE_SET_RESULTS = 'SEARCH_ENGINE_SET_RESULTS'
export const SEARCH_ENGINE_SET_CATEGORY = 'SEARCH_ENGINE_SET_CATEGORY'

export const projectElaborationSearch = query => ({
  type: SEARCH_ENGINE_SEARCH,
  query,
})

export const projectElaborationSetResults = payload => ({
  type: SEARCH_ENGINE_SET_RESULTS,
  payload,
})

export const setSearchCategory = payload => ({
  type: SEARCH_ENGINE_SET_CATEGORY,
  payload,
})
