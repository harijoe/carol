import { call, fork } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'

import api from 'services/api'
import fetch from 'utils/fetchSagas'
import { USER_CREATE, USER_DETAILS, USER_UPDATE, userCreate, userDetails, userUpdate } from './actions'

function* createUser(newData, resolve, reject) {
  return yield call(fetch, userCreate, null, resolve, reject, api.post, newData)
}

function* updateUser({ data, id, resolve, reject }) {
  return yield call(fetch, userUpdate, null, resolve, reject, api.put, id, {}, data)
}

function* getUser({ resolve, reject }) {
  return yield call(fetch, userDetails, null, resolve, reject, api.get, '/users/me')
}

function* watchCreateUserRequest() {
  yield call(takeLatest, USER_CREATE.REQUEST, createUser)
}

function* watchUserDetailsRequest() {
  yield call(takeLatest, USER_DETAILS.REQUEST, getUser)
}

function* watchUpdateUserRequest() {
  yield call(takeLatest, USER_UPDATE.REQUEST, updateUser)
}

export default function* () {
  yield fork(watchUserDetailsRequest)
  yield fork(watchUpdateUserRequest)
  yield fork(watchCreateUserRequest)
}
