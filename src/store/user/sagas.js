import { call, fork, put, takeLatest } from 'redux-saga/effects'
import { stopSubmit } from 'redux-form'
import { push } from 'react-router-redux'

import fetch from 'sagas/fetch'
import notify from 'sagas/notify'
import getFormErrors from 'utils/formErrors'
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

function* handleCreateUserRequest({ data }) {
  return yield* fetch(userCreate, null, 'post', '/users', {}, data)
}

function* handleCreateUserSuccess() {
  yield* notify('user.thank_you', 'user.sign_up.confirmation')

  return yield put(push('/'))
}

function* handleCreateUserFailure({ formName, error }) {
  return yield put(stopSubmit(formName, getFormErrors(error)))
}

function* handleUpdatePasswordRequest({ data, id }) {
  return yield call(fetch, resetPassword, null, 'post', `/forgot-password/${id}`, {}, data)
}

function* handleUpdateUserRequest({ data, id }) {
  return yield call(fetch, userUpdate, null, 'put', id, {}, data)
}

function* handleUpdateUserFailure({ formName, error }) {
  return yield put(stopSubmit(formName, getFormErrors(error)))
}

function* handleUpdateUserSuccess() {
  return yield notify('user.thank_you', 'user.account_updated')
}

function* handleGetUserRequest() {
  return yield call(fetch, userDetails, null, 'get', '/users/me')
}

function* handleRequestNewPassword({ data }) {
  return yield call(fetch, forgotPassword, null, 'post', '/forgot-password/', {}, data)
}

function* handleRequestNewPasswordFailure({ formName, error }) {
  return yield put(stopSubmit(formName, { _error: error }))
}

function* handleUpdatePasswordFailure({ formName }) {
  return yield put(stopSubmit(formName, { _error: 'server_error' }))
}

function* handleUpdatePasswordSuccess() {
  return yield* notify('user.thank_you', 'user.reset_password_success')
}

function* handleRequestNewPasswordSuccess() {
  return yield* notify('user.thank_you', 'user.reset_password_email')
}

function* watchRequestNewPassword() {
  yield takeLatest(USER_FORGOT_PASSWORD.REQUEST, handleRequestNewPassword)
}

function* watchCreateUserRequest() {
  yield takeLatest(USER_CREATE.REQUEST, handleCreateUserRequest)
}

function* watchCreateUserSuccess() {
  yield takeLatest(USER_CREATE.SUCCESS, handleCreateUserSuccess)
}

function* watchCreateUserFailure() {
  yield takeLatest(USER_CREATE.FAILURE, handleCreateUserFailure)
}

function* watchUserDetailsRequest() {
  yield takeLatest(USER_DETAILS.REQUEST, handleGetUserRequest)
}

function* watchUpdateUserRequest() {
  yield takeLatest(USER_UPDATE.REQUEST, handleUpdateUserRequest)
}

function* watchUpdateUserFailure() {
  yield takeLatest(USER_UPDATE.FAILURE, handleUpdateUserFailure)
}

function* watchUpdateUserSuccess() {
  yield takeLatest(USER_UPDATE.SUCCESS, handleUpdateUserSuccess)
}

function* watchUpdatePasswordRequest() {
  yield takeLatest(USER_UPDATE_PASSWORD.REQUEST, handleUpdatePasswordRequest)
}

function* watchUpdatePasswordFailure() {
  yield takeLatest(USER_UPDATE_PASSWORD.FAILURE, handleUpdatePasswordFailure)
}

function* watchUpdatePasswordSuccess() {
  yield takeLatest(USER_UPDATE_PASSWORD.SUCCESS, handleUpdatePasswordSuccess)
}

function* watchRequestNewPasswordSuccess() {
  yield takeLatest(USER_FORGOT_PASSWORD.SUCCESS, handleRequestNewPasswordSuccess)
}

function* watchRequestNewPasswordFailure() {
  yield takeLatest(USER_FORGOT_PASSWORD.FAILURE, handleRequestNewPasswordFailure)
}

export default function* () {
  yield [
    fork(watchUserDetailsRequest),
    fork(watchUpdateUserRequest),
    fork(watchUpdateUserFailure),
    fork(watchUpdateUserSuccess),
    fork(watchCreateUserRequest),
    fork(watchCreateUserSuccess),
    fork(watchCreateUserFailure),
    fork(watchUpdatePasswordRequest),
    fork(watchUpdatePasswordFailure),
    fork(watchUpdatePasswordSuccess),
    fork(watchRequestNewPasswordSuccess),
    fork(watchRequestNewPasswordFailure),
    fork(watchRequestNewPassword),
  ]
}
