import { initialState } from './selectors'
import * as actions from './actions'
import reducer from './reducer'

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it('handles PROJECT_LIST_SUCCESS', () => {
  const payload = [
    {
      reference: '123',
      name: 'project test',
    },
  ]
  const action = { type: actions.PROJECT_LIST.SUCCESS, payload: { 'hydra:member': payload }}

  expect(reducer(initialState, action)).toEqual({...initialState, list: payload})
})
