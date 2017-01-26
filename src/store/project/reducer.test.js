import { initialState } from './selectors'
import * as actions from './actions'
import reducer from './reducer'


it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it('handles PROJECT_SUBMIT_REQUEST', () => {
  const action = { type: actions.PROJECT_SUBMIT_REQUEST }

  expect(reducer(initialState, action)).toEqual(initialState)
})

it('handles PROJECT_SUBMIT_SUCCESS', () => {
  const action = { type: actions.PROJECT_SUBMIT_SUCCESS }

  expect(reducer(initialState, action)).toEqual({ status: true })
})

it('handles PROJECT_SUBMIT_FAILURE', () => {
  const action = { type: actions.PROJECT_SUBMIT_FAILURE }

  expect(reducer(initialState, action)).toEqual({ status: false })
})
