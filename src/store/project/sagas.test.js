import { put, call, fork } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'

import * as actions from './actions'
import saga, * as sagas from './sagas'

beforeEach(() => {
  jest.resetAllMocks()
})

describe('submitProject', () => {
  it('calls failure', () => {
    const generator = sagas.submitProjectDetails()

    generator.next()
    expect(generator.next(1).value).toEqual(put(actions.submitProject.failure()))
  })

  it('calls success', () => {
    const generator = sagas.submitProjectDetails()

    generator.next()
    expect(generator.next(2).value).toEqual(put(actions.submitProject.success()))
  })

})

test('watchProjectSubmitRequest', () => {
  const generator = sagas.watchProjectSubmitRequest()
  const expected = call(takeLatest, actions.PROJECT_SUBMIT_REQUEST, sagas.submitProjectDetails)

  expect(generator.next().value).toEqual(expected)
})

test('saga', () => {
  const generator = saga()

  expect(generator.next().value).toEqual(fork(sagas.watchProjectSubmitRequest))
})
