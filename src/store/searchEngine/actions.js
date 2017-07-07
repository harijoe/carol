export const SEARCH_ENGINE_SEARCH = 'SEARCH_ENGINE_SEARCH'
export const SEARCH_ENGINE_SET_RESULTS = 'SEARCH_ENGINE_SET_RESULTS'

export const projectElaborationSearch = query => ({
  type: SEARCH_ENGINE_SEARCH,
  query,
})

export const projectElaborationSetResults = results => ({
  type: SEARCH_ENGINE_SET_RESULTS,
  results,
})
