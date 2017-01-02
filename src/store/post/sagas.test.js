import { put, call, fork } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'

import * as actions from './actions'
import api from 'services/api'
import { getToken } from 'utils/token'
import saga, * as sagas from './sagas'

beforeEach(() => {
  jest.resetAllMocks()
})

describe('listPosts', () => {
  const scope = 'latestProjectsOnMap'
  const params = { scope, tags: ['inspiration', 'last-project'], limit: 1 }

  it('calls success', () => {
    const generator = sagas.listPosts(params)

    expect(generator.next().value).toEqual(call(getToken))
    expect(generator.next().value).toEqual(call(api.get, '/posts?tag[]=inspiration&tag[]=last-project&itemsPerPage=1&order[project_date]=DESC', { accessToken: undefined }))
    expect(generator.next({ undefined }).value).toEqual(put(actions.postList.success(undefined, scope)))
  })

  it('calls failure', () => {
    const generator = sagas.listPosts(params)

    expect(generator.next().value).toEqual(call(getToken))
    expect(generator.next().value).toEqual(call(api.get, '/posts?tag[]=inspiration&tag[]=last-project&itemsPerPage=1&order[project_date]=DESC', { accessToken: undefined }))
    expect(generator.throw('test').value).toEqual(put(actions.postList.failure('test')))
  })
})

test('watchPostListRequest', () => {
  const generator = sagas.watchPostListRequest()
  const expected = call(takeEvery, actions.POST_LIST_REQUEST, sagas.listPosts)

  expect(generator.next().value).toEqual(expected)
})

test('saga', () => {
  const generator = saga()

  expect(generator.next().value).toEqual(fork(sagas.watchPostListRequest))
})
