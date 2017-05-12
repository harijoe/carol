import { put, take } from 'redux-saga/effects'
import { channel, buffers } from 'redux-saga'

/*
 Channels are a feature of redux-saga — https://goo.gl/B0s6aG

 They are used here to avoid calling multiple times the getToken api
 This function is a helper used to trigger a token refresh. If it's called simultaneously by multiple sagas,
 all of the sagas will be blocked until the worker (located in sagas/auth) manages to fetch a token.
 */
export const requestChannel = channel(buffers.dropping(2))
export const responseChannel = channel()

export default function* () {
  yield put(requestChannel, {})
  const refreshTokenResult = yield take(responseChannel)

  if (typeof refreshTokenResult === 'object' && refreshTokenResult.name === 'HTTPError') {
    console.error('token failed — ', refreshTokenResult.toString())
  }
}
