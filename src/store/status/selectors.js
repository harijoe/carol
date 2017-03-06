export const initialState = {
  loading: {},
  error: {},
}

export const getLoading = (state = initialState) => state.loading
export const getError = (state = initialState) => state.error

// These following selectors are to be used in a reducer as they take an actionTypes object as input
export const isLoading = (state = initialState, actionType) => getLoading(state)[actionType] || false
export const hasError = (state = initialState, actionType) => getError(state)[actionType] || false
