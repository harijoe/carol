import { fromJS } from 'immutable'
import * as selectors from './selectors'

const list = fromJS({
  latestProjectsOnMap: [],
  latestProjectsResources: [],
  testimonialArticles: [],
  reinsuranceArticles: [],
})

test('initialState', () => {
  expect(selectors.initialState).toEqual(list)
})

test('getList', () => {
  const expected = fromJS([])

  expect(selectors.getList(selectors.initialState, 'latestProjectsOnMap')).toEqual(expected)
})
