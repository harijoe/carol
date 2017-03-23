import { put, takeLatest } from 'redux-saga/effects'
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

// @Todo: Refacto saga

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
  return yield* fetch(resetPassword, null, 'post', `/forgot-password/${id}`, {}, data)
}

function* handleUpdateUserRequest({ data, id }) {
  return yield* fetch(userUpdate, null, 'put', id, {}, data)
}

function* handleUpdateUserFailure({ formName, error }) {
  return yield put(stopSubmit(formName, getFormErrors(error)))
}

function* handleUpdateUserSuccess() {
  return yield notify('user.thank_you', 'user.account_updated')
}

function* handleGetUserRequest() {
  return yield* fetch(userDetails, null, 'get', '/users/me')
}

function* handleRequestNewPassword({ data }) {
  return yield* fetch(forgotPassword, null, 'post', '/forgot-password/', {}, data)
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

export default function* () {
  yield [
    takeLatest(USER_FORGOT_PASSWORD.REQUEST, handleRequestNewPassword),
    takeLatest(USER_CREATE.REQUEST, handleCreateUserRequest),
    takeLatest(USER_CREATE.SUCCESS, handleCreateUserSuccess),
    takeLatest(USER_CREATE.FAILURE, handleCreateUserFailure),
    takeLatest(USER_DETAILS.REQUEST, handleGetUserRequest),
    takeLatest(USER_UPDATE.REQUEST, handleUpdateUserRequest),
    takeLatest(USER_UPDATE.FAILURE, handleUpdateUserFailure),
    takeLatest(USER_UPDATE.SUCCESS, handleUpdateUserSuccess),
    takeLatest(USER_UPDATE_PASSWORD.REQUEST, handleUpdatePasswordRequest),
    takeLatest(USER_UPDATE_PASSWORD.FAILURE, handleUpdatePasswordFailure),
    takeLatest(USER_UPDATE_PASSWORD.SUCCESS, handleUpdatePasswordSuccess),
    takeLatest(USER_FORGOT_PASSWORD.SUCCESS, handleRequestNewPasswordSuccess),
    takeLatest(USER_FORGOT_PASSWORD.FAILURE, handleRequestNewPasswordFailure),
  ]
}
