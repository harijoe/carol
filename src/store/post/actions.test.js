import * as actions from './actions'

const scope = 'latestProjectsOnMap'
const tags = ['inspiration', 'last-project']
const limit = 3

test('postList', () => {
  expect(actions.postList.request(scope, tags, limit)).toEqual({
    type: actions.POST_LIST.REQUEST,
    scope,
    tags,
    limit,
  })

  expect(actions.postList.success([1, 2, 3])).toEqual({
    type: actions.POST_LIST.SUCCESS,
    payload: [1, 2, 3],
  })

  expect(actions.postList.failure('test')).toEqual({
    type: actions.POST_LIST.FAILURE,
    error: 'test',
  })
})
