import cookie from 'react-cookie'

import * as sagas from './sagas'

const resolve = jest.fn()
const reject = jest.fn()

beforeEach(() => {
  jest.resetAllMocks()
})

describe('getAuth', () => {
  it('should call resolve once when token is set in cookie and no credentials in params', () => {
    const params = {
      grantType: 'client_credentials',
      credentials: null,
      resolve,
      reject,
    }
    const generator = sagas.handleAuthLoginRequest(params)

    expect(generator.next().value).toEqual(cookie.load('access_token'))
    expect(resolve).not.toBeCalled()
    expect(generator.next('xdfg544xdfg54'))
    expect(resolve).toHaveBeenCalledWith({ access_token: 'xdfg544xdfg54' })
    expect(generator.next().done).toBeTrue
  })

  it('should call fetchEntity once when token is set in cookie and credentials exists in params', () => {
    const param = {
      grantType: 'client_credentials',
      credentials: 'test_credentials',
      resolve,
      reject,
    }
    const generator = sagas.handleAuthLoginRequest(param)

    expect(generator.next().value).toEqual(cookie.load('access_token'))
    expect(resolve).not.toBeCalled()
    generator.next('xdfg544xdfg54')
    expect(resolve).not.toBeCalled()
    expect(generator.next().done).toBeTrue
  })
})
