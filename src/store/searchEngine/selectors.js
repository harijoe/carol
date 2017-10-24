import get from 'lodash/get'

export const initialState = {
  results: null,
  query: '',
}

export const getProjectFlowResults = (state = initialState) => get(state, 'results.projectFlow')
export const getWordpressContentResults = (state = initialState) => get(state, 'results.wordpressContent')
export const getQuery = (state = initialState) => state.query
