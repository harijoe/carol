import cookie from 'services/cookies'
import { fromAuth } from 'store/selectors'
import { select } from 'redux-saga/effects'

export const removeToken = function* () {
  yield [cookie.delete('access_token'), cookie.delete('refresh_token'), cookie.delete('grant_type')]
}

export const saveToken = function* (grantType) {
  const accessToken = yield select(fromAuth.getAccessToken)
  const expiresIn = yield select(fromAuth.getExpiresIn)
  const refreshToken = yield select(fromAuth.getRefreshToken)

  cookie.set('access_token', accessToken, { path: '/', maxAge: expiresIn, secure: true })

  /*
   Notice: grantType is saved to cookies to determine if the user is supposed to be logged in or not
   it should thus expire at the time as the refresh_token
   */
  const tenDays = 864000

  if (refreshToken != null) {
    cookie.set('grant_type', grantType, { path: '/', maxAge: tenDays, secure: true })
    cookie.set('refresh_token', refreshToken, { path: '/', maxAge: tenDays, secure: true })
  }
}
