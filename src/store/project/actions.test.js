import * as actions from './actions'

test('projectSubmit', () => {
  expect(actions.projectSubmit.request()).toEqual({
    type: actions.PROJECT_SUBMIT.REQUEST,
  })

  expect(actions.projectSubmit.success()).toEqual({
    type: actions.PROJECT_SUBMIT.SUCCESS,
  })

  expect(actions.projectSubmit.failure()).toEqual({
    type: actions.PROJECT_SUBMIT.FAILURE,
  })
})

test('projectList', () => {
  expect(actions.projectList.request()).toEqual({
    type: actions.PROJECT_LIST.REQUEST,
  })

  expect(actions.projectList.success()).toEqual({
    type: actions.PROJECT_LIST.SUCCESS,
  })

  expect(actions.projectList.failure()).toEqual({
    type: actions.PROJECT_LIST.FAILURE,
  })
})
