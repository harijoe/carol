import { createStore } from 'redux'
import { reducer as formReducer } from 'redux-form'

const mockStore = (initialState = {}) => {
  const store = createStore((state = initialState, action) => ({
    ...state,
    form: formReducer(state.form, action),
  }))

  return store
}

export default mockStore
