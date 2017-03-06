import splitActionType from 'utils/actions'

import { initialState, getLoading, getError } from './selectors'

export default (state = initialState, action) => {
  if (action.type == null) return state

  const { prefix, suffix } = splitActionType(action.type)

  switch (suffix) {
    case 'REQUEST':
      return {
        loading: {
          ...getLoading(state),
          [prefix]: true,
        },
        error: {
          ...getError(state),
          [prefix]: false,
        },
      }
    case 'SUCCESS':
      return {
        loading: {
          ...getLoading(state),
          [prefix]: false,
        },
        error: {
          ...getError(state),
          [prefix]: false,
        },
      }
    case 'FAILURE':
      return {
        loading: {
          ...getLoading(state),
          [prefix]: false,
        },
        error: {
          ...getError(state),
          [prefix]: true,
        },
      }
    default:
      return state
  }
}
