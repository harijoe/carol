import { initialState } from './selectors'
import { FIRM_LIST, FIRM_DETAILS, FIRM_REVIEWS } from './actions'

const onlyRealComments = reviews => reviews.filter(review => review.reviewText)

export default (state = initialState, action) => {
  switch (action.type) {
    case FIRM_LIST.SUCCESS:
      return {
        ...state,
        list: action.payload['hydra:member'],
      }
    case FIRM_DETAILS.SUCCESS:
      return {
        ...state,
        [action.payload['@id']]: action.payload,
      }
    case FIRM_REVIEWS.SUCCESS:
      return {
        ...state,
        reviews: {
          ...state.reviews,
          [action.payload['@id']]: onlyRealComments(action.payload['hydra:member']),
        },
      }
    default: {
      return state
    }
  }
}
