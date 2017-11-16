import * as selectors from './selectors'

test('initialState', () => {
  expect(selectors.initialState).toEqual(selectors.initialState)
})

test('getList', () => {
  expect(selectors.getList([])).toEqual([])
  expect(selectors.getList()).toEqual(selectors.initialState.list)
  expect(selectors.getList(selectors.initialState)).toEqual([])
})

test('getDetails', () => {
  expect(selectors.getDetails({})).toEqual()
  expect(selectors.getDetails()).toEqual()
  expect(selectors.getDetails(selectors.initialState)).toEqual()
})

describe('getReviews', () => {

  it('returns the list of reviews for that firm', () => {
    expect(selectors.getReviews({ reviews: { '1/reviews': ['review'] } }, 1)).toEqual(['review'])
  })

  it('returns undefined if no reviews have been loaded', () => {
    expect(selectors.getReviews(selectors.initialState, 1)).not.toBeDefined()
  })

  it('returns empty list if there are no reviews for that firm', () => {
    expect(selectors.getReviews({ reviews: { '1/reviews': [] } }, 1)).toEqual([])
  })

})
