import { initialState } from './selectors'
import * as actions from './actions'
import reducer from './reducer'

const altState = {
  ...initialState,
  list: [6, 7, 8]
}

const data = {
  id: 1,
  guid: 'aze123',
  name: 'test',
}

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it('handles FIRM_LIST_SUCCESS', () => {
  const action = { type: actions.FIRM_LIST_SUCCESS, list: [1, 2, 3] }

  expect(reducer(initialState, action)).toEqual({ ...initialState, list: [1, 2, 3] })
  expect(reducer(altState, action)).toEqual({ ...altState, list: [1, 2, 3] })
})

it('handles FIRM_DETAILS_SUCCESS', () => {
  const action = { type: actions.FIRM_DETAILS_SUCCESS, data: data }

  expect(reducer(initialState, action)).toEqual({ ...initialState, [data.guid]: data })
})
