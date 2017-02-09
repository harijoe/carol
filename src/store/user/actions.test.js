import * as actions from './actions'

test('profile', () => {
  expect(actions.userDetails.request('resolve', 'reject')).toEqual({
    type: actions.USER_DETAILS.REQUEST,
    resolve: 'resolve',
    reject: 'reject',
  })
  expect(actions.userDetails.success('payload')).toEqual({
    type: actions.USER_DETAILS.SUCCESS,
    payload: 'payload',
  })
  expect(actions.userDetails.failure('error')).toEqual({
    type: actions.USER_DETAILS.FAILURE,
    error: 'error',
  })
})
