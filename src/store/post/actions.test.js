import * as actions from './actions'

test('postList', () => {
  expect(actions.postList.request(3)).toEqual({
    type: actions.POST_LIST_REQUEST,
    limit: 3,
  })

  expect(actions.postList.success([1, 2, 3])).toEqual({
    type: actions.POST_LIST_SUCCESS,
    list: [1, 2, 3],
  })

  expect(actions.postList.failure('test')).toEqual({
    type: actions.POST_LIST_FAILURE,
    error: 'test',
  })
})
