import * as actions from './actions'

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

test('projectDetails', () => {
    expect(actions.projectDetails.request()).toEqual({
        type: actions.PROJECT_DETAILS.REQUEST,
    })

    expect(actions.projectDetails.success()).toEqual({
        type: actions.PROJECT_DETAILS.SUCCESS,
    })

    expect(actions.projectDetails.failure()).toEqual({
        type: actions.PROJECT_DETAILS.FAILURE,
    })
})
