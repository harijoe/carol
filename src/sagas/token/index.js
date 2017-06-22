import cookie from 'react-cookie'
import { fromAuth, fromContext } from 'store/selectors'
import { select } from 'redux-saga/effects'

export const removeToken = function* () {
  yield [
    cookie.remove('access_token'),
    cookie.remove('refresh_token'),
    cookie.remove('grant_type'),
  ]
}

export const saveToken = function* (grantType) {
  const accessToken = yield select(fromAuth.getAccessToken)
  const expiresIn = yield select(fromAuth.getExpiresIn)
  const refreshToken = yield select(fromAuth.getRefreshToken)

  const tenDays = 864000

  /*
   This fixes a bug with react-router, the expiration values are evaluated as seconds on the client
   but express evaluates them as milliseconds
   */
  const ssr = yield select(fromContext.isSSR)
  const factor = ssr ? 1000 : 1

  cookie.save('access_token', accessToken, { path: '/', maxAge: expiresIn * factor, secure: true })

  /*
   Notice: grantType is saved to cookies to determine if the user is supposed to be logged in or not
   it should thus expire at the time as the refresh_token
   */
  if (refreshToken != null) {
    cookie.save('grant_type', grantType, { path: '/', maxAge: tenDays * factor, secure: true })
    cookie.save('refresh_token', refreshToken, { path: '/', maxAge: tenDays * factor, secure: true })
  }
}
