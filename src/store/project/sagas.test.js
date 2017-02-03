import { take, put, call, fork } from 'redux-saga/effects'

import api from 'services/api'
import { getToken } from 'utils/token'
import * as actions from './actions'
import saga, * as sagas from './sagas'

beforeEach(() => {
  jest.resetAllMocks()
})

describe('submitProject', () => {
  it('calls failure', () => {
    const generator = sagas.submitProject()

    generator.next()
    expect(generator.next(1).value).toEqual(put(actions.projectSubmit.failure()))
  })

  it('calls success', () => {
    const generator = sagas.submitProject()

    generator.next()
    expect(generator.next(2).value).toEqual(put(actions.projectSubmit.success()))
  })
})

describe('readProjectList', () => {
  it('calls success', () => {
    const generator = sagas.readProjectList()

    expect(generator.next().value).toEqual(call(getToken))
    expect(generator.next().value).toEqual(call(api.get, '/projects', { accessToken: undefined }))
    expect(generator.next({ undefined }).value).toEqual(put(actions.projectList.success(undefined)))
  })

  it('calls failure', () => {
    const generator = sagas.readProjectList()

    expect(generator.next().value).toEqual(call(getToken))
    expect(generator.next().value).toEqual(call(api.get, '/projects', { accessToken: undefined }))
    expect(generator.throw('test').value).toEqual(put(actions.projectList.failure('test')))
  })
})

test('watchProjectSubmitRequest', () => {
  const generator = sagas.watchProjectSubmitRequest()

  expect(generator.next().value).toEqual(take(actions.PROJECT_SUBMIT_REQUEST))
  expect(generator.next().value).toEqual(call(sagas.submitProject))
})

test('watchProjectListRequest', () => {
  const generator = sagas.watchProjectListRequest()

  expect(generator.next().value).toEqual(take(actions.PROJECT_LIST_REQUEST))
  expect(generator.next().value).toEqual(call(sagas.readProjectList))
})

test('saga', () => {
  const generator = saga()

  expect(generator.next().value).toEqual(fork(sagas.watchProjectSubmitRequest))
  expect(generator.next().value).toEqual(fork(sagas.watchProjectListRequest))
})
