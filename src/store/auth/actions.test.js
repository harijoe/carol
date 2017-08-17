import * as actions from './actions'

describe('grantType is client_credentials', () => {
  const grantType = 'client_credentials'

  it('should render request type ', () => {
    expect(actions.authLogin(grantType).request('test_credentials')).toEqual({
      type: actions.AUTH_LOGIN.REQUEST,
      grantType: 'client_credentials',
      credentials: 'test_credentials',
    })
  })
  it('should render succes type ', () => {
    expect(
      actions.authLogin(grantType).success({
        access_token: '65x4dfgdx654xdg5f68dxfg644xg',
        refresh_token: '65x4dfg654xdg5f68dxfg644xg',
        expires_in: 3600,
      }),
    ).toEqual({
      type: actions.AUTH_LOGIN.SUCCESS,
      payload: {
        accessToken: '65x4dfgdx654xdg5f68dxfg644xg',
        refreshToken: '65x4dfg654xdg5f68dxfg644xg',
        expiresIn: 3600,
        grantType,
      },
    })
  })
  it('should render failure type ', () => {
    expect(actions.authLogin(grantType).failure('test error')).toEqual({
      type: actions.AUTH_LOGIN.FAILURE,
      error: 'test error',
    })
  })
  it('should render logout type ', () => {
    expect(actions.authLogout()).toEqual({
      type: actions.AUTH_LOGOUT,
    })
  })
})
