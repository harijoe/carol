import { fromJS } from 'immutable'
import { initialState } from './selectors'
import * as actions from './actions'
import reducer from './reducer'

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it('handles POST_LIST_SUCCESS', () => {
  expect(reducer(initialState, {
    type: actions.POST_LIST_SUCCESS,
    list: {
      scope: 'latestProjectsOnMap',
      data: [
        {
          '@id': 1,
          title: 'post title 1',
          body: 'post body 1',
        },
        {
          '@id': 2,
          title: 'post title 2',
          body: 'post body 2',
        }
      ],
    },
  })).toEqual({
    ...initialState,
    items: fromJS({
      latestProjectsOnMap: [
        {
          id: 1,
          title: 'post title 1',
          body: 'post body 1',
        },
        {
          id: 2,
          title: 'post title 2',
          body: 'post body 2',
        }
      ]
    }),
  })
})
