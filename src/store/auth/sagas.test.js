import cookie from 'react-cookie'

import * as sagas from './sagas'

beforeEach(() => {
  jest.resetAllMocks()
})

describe('getAuth', () => {
  it('should return null when there is no credentials in params', () => {
    const params = {
      grantType: 'client_credentials',
      formName: 'toto',
      credentials: null,
    }
    const generator = sagas.handleAuthLoginRequest(params)

    expect(generator.next().value).toEqual(cookie.load('access_token'))
    expect(generator.next('xdfg544xdfg54').value).toBeNull
    expect(generator.next().done).toBeTrue
  })

  it('should call fetchEntity once when token is set in cookie and credentials exists in params', () => {
    const param = {
      grantType: 'client_credentials',
      formName: 'toto',
      credentials: 'test_credentials',
    }
    const generator = sagas.handleAuthLoginRequest(param)

    expect(generator.next().value).toEqual(cookie.load('access_token'))
    generator.next('xdfg544xdfg54')
    expect(generator.next().done).toBeTrue
  })
})
