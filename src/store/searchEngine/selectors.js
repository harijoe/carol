export const initialState = {
  results: null,
  query: '',
}

export const getResults = (state = initialState) => state.results
export const getQuery = (state = initialState) => state.query
