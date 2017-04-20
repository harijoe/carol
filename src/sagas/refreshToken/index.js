import { put, take } from 'redux-saga/effects'
import { channel } from 'redux-saga'

/*
 Channels are a feature of redux-saga — https://goo.gl/B0s6aG

 They are used here to avoid calling multiple times the getToken api
 This function is a helper used to trigger a token refresh. If it's called simultaneously by multiple sagas,
 all of the sagas will be blocked until the worker (located in sagas/auth) manages to fetch a token.
 */
export const requestChannel = channel()
export const responseChannel = channel()

export default function* () {
  yield put(requestChannel, {})
  const refreshTokenResult = yield take(responseChannel)

  if (refreshTokenResult === false) {
    throw new Error('Token refresh failed')
  }
}
