export const initialState = {
  list: [],
}

export const getList = (state = initialState) => state.list || []
export const getDetails = (state = initialState, id) => state[id]
