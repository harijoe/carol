export const initialState = {
  status: null,
  list: [],
}

export const getStatus = (state = initialState) => state.status
export const getList = (state = initialState) => state.list || []
