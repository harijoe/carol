import { fromAuth, fromContext } from 'store/selectors'
import cookie from 'react-cookie'
import { select } from 'redux-saga/effects'

export default function* (grantType) {
  const accessToken = yield select(fromAuth.getAccessToken)
  const expiresIn = yield select(fromAuth.getExpiresIn)
  const refreshToken = yield select(fromAuth.getRefreshToken)

  const oneMonth = 2592000

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
    cookie.save('grant_type', grantType, { path: '/', maxAge: oneMonth * factor, secure: true })
    cookie.save('refresh_token', refreshToken, { path: '/', maxAge: oneMonth * factor, secure: true }) // expires in 1 month
  }
}
