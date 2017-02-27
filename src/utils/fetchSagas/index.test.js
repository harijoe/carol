import { put, call, select } from 'redux-saga/effects'
import fetchEntity from './'
import api from 'services/api'
import { fromLocale } from 'store/selectors'

const resolve = jest.fn()
const reject = jest.fn()
const actions = {
  request: param => ({ type: 'TEST_REQUEST', param }),
  success: payload => ({ type: 'TEST_SUCCESS', payload }),
  failure: error => ({ type: 'TEST_FAILURE', error }),
}

beforeEach(() => {
  jest.resetAllMocks()
})

describe('fetchEntity', () => {
  const payload = { param1: 'test1', param2: 'test2' }

  it('calls success and resolve', () => {
    const generator = fetchEntity(actions, payload, resolve, reject, 'get', 'url', { setting1: 'test1' }, 'test2')
    const responseMock = { data: { token: 1 } }

    expect(generator.next().value).toEqual(select(fromLocale.getLang))
    expect(generator.next('fr').value).toEqual(call(api['get'], 'url', { setting1: 'test1', lang: 'fr' }, 'test2'))
    expect(resolve).not.toBeCalled()
    expect(generator.next(responseMock).value).toEqual(put(actions.success({ ...responseMock, ...payload })))
    expect(resolve).toHaveBeenCalledWith(responseMock)
  })

  it('calls failure and reject', () => {
    const generator = fetchEntity(actions, payload, resolve, reject, 'get', 'url', { setting1: 'test1' }, 'test2')
    const errorMock = 'error'

    expect(generator.next().value).toEqual(select(fromLocale.getLang))
    expect(generator.next('fr').value).toEqual(call(api['get'], 'url', { setting1: 'test1', lang: 'fr' }, 'test2'))
    expect(generator.throw(errorMock).value).toEqual(put(actions.failure(errorMock)))
    expect(reject).toHaveBeenCalledWith(errorMock)
  })
})
