export const initialState = {}

export const getList = (state = initialState, scope) => state[scope] || []
