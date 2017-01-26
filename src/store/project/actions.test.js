import * as actions from './actions'

test('submitProject', () => {
  expect(actions.submitProject.request()).toEqual({
    type: actions.PROJECT_SUBMIT_REQUEST,
  })

  expect(actions.submitProject.success()).toEqual({
    type: actions.PROJECT_SUBMIT_SUCCESS,
  })

  expect(actions.submitProject.failure()).toEqual({
    type: actions.PROJECT_SUBMIT_FAILURE,
  })
})
