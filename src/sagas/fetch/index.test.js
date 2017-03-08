import { put, call, select } from 'redux-saga/effects'
import { rawFetch as fetchEntity } from './'
import api from 'services/api'
import { fromAuth, fromLocale } from 'store/selectors'

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

  it('calls success', () => {
    const generator = fetchEntity(actions, payload, 'get', 'url', { setting1: 'test1' }, 'test2')
    const responseMock = { data: { token: 1 } }

    expect(generator.next().value).toEqual(select(fromLocale.getLang))
    expect(generator.next('fr').value).toEqual(select(fromAuth.getToken))
    expect(generator.next('123test').value).toEqual(call(api['get'], 'url', { setting1: 'test1', lang: 'fr', accessToken: '123test' }, 'test2'))
    expect(generator.next(responseMock).value).toEqual(put(actions.success({ ...responseMock, ...payload })))
  })

  it('calls failure', () => {
    const generator = fetchEntity(actions, payload, 'get', 'url', { setting1: 'test1' }, 'test2')
    const errorMock = 'error'

    expect(generator.next().value).toEqual(select(fromLocale.getLang))
    expect(generator.next('fr').value).toEqual(select(fromAuth.getToken))
    expect(generator.next('123test').value).toEqual(call(api['get'], 'url', { setting1: 'test1', lang: 'fr', accessToken: '123test' }, 'test2'))
    expect(generator.throw(errorMock).value).toEqual(put(actions.failure(errorMock)))
  })
})
