import * as actions from './actions'

test('firmDetails', () => {
  expect(actions.firmDetails.request()).toEqual({
    type: actions.FIRM_DETAILS_REQUEST,
  })

  expect(actions.firmDetails.success({ firm: 1 })).toEqual({
    type: actions.FIRM_DETAILS_SUCCESS,
    data: { firm: 1 },
  })

  expect(actions.firmDetails.failure('test')).toEqual({
    type: actions.FIRM_DETAILS_FAILURE,
    error: 'test',
  })
})

test('firmList', () => {
  expect(actions.firmList.request()).toEqual({
    type: actions.FIRM_LIST_REQUEST,
  })

  expect(actions.firmList.success([1, 2, 3])).toEqual({
    type: actions.FIRM_LIST_SUCCESS,
    list: [1, 2, 3],
  })

  expect(actions.firmList.failure('test')).toEqual({
    type: actions.FIRM_LIST_FAILURE,
    error: 'test',
  })
})
