import { initialState } from './selectors'
import * as actions from './actions'
import reducer from './reducer'

const payload = [
  {
    '@id': 1,
    title: 'post title 1',
    body: 'post body 1',
    featuredMedia: 'image.jpg',
    date: '01/01/2016',
    latitude: '123',
    longitude: '123',
    slug: 'text',
    tags: 'tag1,tag2',
  },
]

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it('handles POST_LIST_SUCCESS', () => {
  const scope = 'latestProjectsOnMap'
  const action = { type: actions.POST_LIST.SUCCESS, payload: { 'hydra:member': payload }, actionParams: { scope } }

  expect(reducer(initialState, action)).toEqual({ ...initialState, [scope]: payload })
})
