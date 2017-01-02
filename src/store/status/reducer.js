import { initialState, getLoadingState, getErrorState } from './selectors'

export default (state = initialState, action) => {
  if (!action.type) return state

  const [suffix, ...splitPrefix] = action.type.split('_').reverse()
  const prefix = splitPrefix.reverse().join('_')

  switch (suffix) {
    case 'REQUEST':
      return {
        loading: {
          ...getLoadingState(state),
          [prefix]: true,
        },
        error: {
          ...getErrorState(state),
          [prefix]: false,
        },
      }
    case 'SUCCESS':
      return {
        loading: {
          ...getLoadingState(state),
          [prefix]: false,
        },
        error: {
          ...getErrorState(state),
          [prefix]: false,
        },
      }
    case 'FAILURE':
      return {
        loading: {
          ...getLoadingState(state),
          [prefix]: false,
        },
        error: {
          ...getErrorState(state),
          [prefix]: true,
        },
      }
    default:
      return state
  }
}
