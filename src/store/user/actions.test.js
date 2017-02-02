import * as actions from './actions'

test('profile', () => {
  expect(actions.profile.request('resolve', 'reject')).toEqual({
    type: actions.USER_DETAILS.REQUEST,
    resolve: 'resolve',
    reject: 'reject',
  })
  expect(actions.profile.success('payload')).toEqual({
    type: actions.USER_DETAILS.SUCCESS,
    payload: 'payload',
  })
  expect(actions.profile.failure('error')).toEqual({
    type: actions.USER_DETAILS.FAILURE,
    error: 'error',
  })
})
