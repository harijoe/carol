import { fromAuth } from 'store/selectors'
import cookie from 'react-cookie'
import { select } from 'redux-saga/effects'

export default function* (grantType) {
  const accessToken = yield select(fromAuth.getAccessToken)
  const expiresIn = yield select(fromAuth.getExpiresIn)

  yield [
    cookie.save('access_token', accessToken, { path: '/', maxAge: expiresIn, secure: true }),
    cookie.save('grant_type', grantType, { path: '/', maxAge: expiresIn, secure: true }),
  ]
}
