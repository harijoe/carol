import { take, put, call, fork } from 'redux-saga/effects'
import * as actions from './actions'
import api from 'services/api'
import saga, * as sagas from './sagas'

/** global: jest */
const resolve = jest.fn()
const reject = jest.fn()

beforeEach(() => {
  jest.resetAllMocks()
})

describe('listPosts', () => {
  const data = [1, 2, 3]

  it('calls success', () => {
    const generator = sagas.listPosts(1)
    expect(generator.next().value).toEqual(call(api.get, '/posts', { params: { _limit: 1 } }))
    expect(generator.next({ data }).value).toEqual(put(actions.postList.success(data)))
  })

  it('calls success and resolve', () => {
    const generator = sagas.listPosts(1, resolve)
    expect(generator.next().value).toEqual(call(api.get, '/posts', { params: { _limit: 1 } }))
    expect(resolve).not.toBeCalled()
    expect(generator.next({ data }).value).toEqual(put(actions.postList.success(data)))
    expect(resolve).toHaveBeenCalledWith(data)
  })

  it('calls failure', () => {
    const generator = sagas.listPosts(1)
    expect(generator.next().value).toEqual(call(api.get, '/posts', { params: { _limit: 1 } }))
    expect(generator.throw('test').value).toEqual(put(actions.postList.failure('test')))
  })

  it('calls failure and reject', () => {
    const generator = sagas.listPosts(1, resolve, reject)
    expect(generator.next().value).toEqual(call(api.get, '/posts', { params: { _limit: 1 } }))
    expect(reject).not.toBeCalled()
    expect(generator.throw('test').value).toEqual(put(actions.postList.failure('test')))
    expect(reject).toHaveBeenCalledWith('test')
  })
})

test('watchPostListRequest', () => {
  const payload = { limit: 1, resolve, reject }
  const generator = sagas.watchPostListRequest()
  expect(generator.next().value).toEqual(take(actions.POST_LIST_REQUEST))
  expect(generator.next(payload).value).toEqual(call(sagas.listPosts, ...Object.values(payload)))
})

test('saga', () => {
  const generator = saga()
  expect(generator.next().value).toEqual(fork(sagas.watchPostListRequest))
})
