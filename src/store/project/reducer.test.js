import { initialState } from './selectors'
import * as actions from './actions'
import reducer from './reducer'

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it('handles PROJECT_SUBMIT_REQUEST', () => {
  const action = { type: actions.PROJECT_SUBMIT.REQUEST }

  expect(reducer(initialState, action)).toEqual(initialState)
})

it('handles PROJECT_SUBMIT_SUCCESS', () => {
  const action = { type: actions.PROJECT_SUBMIT.SUCCESS }

  expect(reducer(initialState, action)).toEqual({ list: [], status: true })
})

it('handles PROJECT_SUBMIT_FAILURE', () => {
  const action = { type: actions.PROJECT_SUBMIT.FAILURE }

  expect(reducer(initialState, action)).toEqual({ list: [], status: false })
})

it('handles PROJECT_LIST_SUCCESS', () => {
  const payload = [
    {
      reference: '123',
      name: 'project test',
    },
  ]
  const action = { type: actions.PROJECT_LIST.SUCCESS, payload: payload }

  expect(reducer(initialState, action)).toEqual({...initialState, list: action.payload})
})
