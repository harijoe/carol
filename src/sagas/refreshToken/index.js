import { put, take } from 'redux-saga/effects'
import { channel } from 'redux-saga'

/*
 Channels are a feature of redux-saga — https://goo.gl/B0s6aG

 They are used here to avoid calling multiple times the getToken api
 - refreshToken : Exported saga used to require a token. It waits until the token is ready
 */
export const requestChannel = channel()
export const responseChannel = channel()

export default function* () {
  yield put(requestChannel, {})
  yield take(responseChannel)
}

