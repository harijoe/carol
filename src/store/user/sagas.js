import { call, fork } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'

import fetch from 'utils/fetchSagas'
import {
    USER_CREATE,
    USER_DETAILS,
    USER_UPDATE,
    USER_UPDATE_PASSWORD,
    USER_FORGOT_PASSWORD,
    userCreate,
    userDetails,
    userUpdate,
    forgotPassword,
    resetPassword,
} from './actions'

function* createUser({ data, resolve, reject }) {
  return yield call(fetch, userCreate, null, resolve, reject, 'post', '/users', {}, data)
}

function* setNewPassword({ data, id, resolve, reject }) {
  return yield call(fetch, resetPassword, null, resolve, reject, 'post', `/forgot-password/${id}`, {}, data)
}

function* updateUser({ data, id, resolve, reject }) {
  return yield call(fetch, userUpdate, null, resolve, reject, 'put', id, {}, data)
}

function* getUser({ resolve, reject }) {
  return yield call(fetch, userDetails, null, resolve, reject, 'get', '/users/me')
}

function* requestNewPassword({ data, resolve, reject }) {
  return yield call(fetch, forgotPassword, null, resolve, reject, 'post', '/forgot-password/', {}, data)
}

function* watchRequestNewPassword() {
  yield call(takeLatest, USER_FORGOT_PASSWORD.REQUEST, requestNewPassword)
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

function* watchUpdatePassword() {
  yield call(takeLatest, USER_UPDATE_PASSWORD.REQUEST, setNewPassword)
}

export default function* () {
  yield fork(watchUserDetailsRequest)
  yield fork(watchUpdateUserRequest)
  yield fork(watchCreateUserRequest)
  yield fork(watchUpdatePassword)
  yield fork(watchRequestNewPassword)
}
