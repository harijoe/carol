import * as actions from './actions'

test('projectSubmit', () => {
  expect(actions.projectSubmit.request()).toEqual({
    type: actions.PROJECT_SUBMIT_REQUEST,
  })

  expect(actions.projectSubmit.success()).toEqual({
    type: actions.PROJECT_SUBMIT_SUCCESS,
  })

  expect(actions.projectSubmit.failure()).toEqual({
    type: actions.PROJECT_SUBMIT_FAILURE,
  })
})

test('projectList', () => {
  expect(actions.projectList.request()).toEqual({
    type: actions.PROJECT_LIST_REQUEST,
  })

  expect(actions.projectList.success()).toEqual({
    type: actions.PROJECT_LIST_SUCCESS,
  })

  expect(actions.projectList.failure()).toEqual({
    type: actions.PROJECT_LIST_FAILURE,
  })
})
