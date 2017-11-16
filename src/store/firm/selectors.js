export const initialState = {
  list: [],
  reviews: {},
}

export const getList = (state = initialState) => state.list || []
export const getDetails = (state = initialState, id) => state[id]
export const getReviews = (state, firmId) => state.reviews[`${firmId}/reviews`]
