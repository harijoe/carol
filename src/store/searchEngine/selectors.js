export const initialState = {
  results: null,
  query: '',
  nbHits: null,
}

export const getResults = (state = initialState) => state.results
export const getQuery = (state = initialState) => state.query
export const getNbHits = (state = initialState) => state.nbHits
