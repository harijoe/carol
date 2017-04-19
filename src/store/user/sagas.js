import { put } from 'redux-saga/effects'
import { stopSubmit } from 'redux-form'
import { push } from 'react-router-redux'
import { HTTPError } from 'utils/errors'

import fetch from 'sagas/fetch'
import notify from 'sagas/notify'
import getFormErrors from 'utils/formErrors'
import { takeLatest } from 'utils/effects'
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
  try {
    yield* fetch(userCreate, 'post', '/users', {}, data)
    yield* notify('user.thank_you', 'user.sign_up.confirmation')
    yield put(push('/'))
  } catch (error) {
    if (error instanceof HTTPError) {
      yield put(stopSubmit('SignUpForm', getFormErrors(error.message)))
    }
  }
}

function* handleUpdateUserRequest({ data, id }) {
  try {
    yield* fetch(userUpdate, 'put', id, {}, data)
    yield notify('user.thank_you', 'user.account_updated')
  } catch (error) {
    if (error instanceof HTTPError) {
      yield put(stopSubmit('ProfileForm', getFormErrors(error.message)))
    }
  }
}

function* handleGetUserRequest() {
  yield* fetch(userDetails, 'get', '/users/me')
}

function* handleNewPasswordRequest({ data }) {
  try {
    yield* fetch(forgotPassword, 'post', '/forgot-password/', {}, data)
    yield* notify('user.thank_you', 'user.reset_password_email')
  } catch (error) {
    if (error instanceof HTTPError) {
      yield put(stopSubmit('ForgotPasswordForm', { _error: error.message }))
    }
  }
}

function* handleUpdatePasswordRequest({ data, id }) {
  try {
    yield* fetch(resetPassword, 'post', `/forgot-password/${id}`, {}, data)
    yield* notify('user.thank_you', 'user.reset_password_success')
  } catch (error) {
    if (error instanceof HTTPError) {
      yield put(stopSubmit('ResetPasswordForm', { _error: 'server_error' }))
    }
  }
}

export default function* () {
  yield [
    takeLatest(USER_CREATE.REQUEST, handleCreateUserRequest),
    takeLatest(USER_DETAILS.REQUEST, handleGetUserRequest),
    takeLatest(USER_UPDATE.REQUEST, handleUpdateUserRequest),
    takeLatest(USER_UPDATE_PASSWORD.REQUEST, handleUpdatePasswordRequest),
    takeLatest(USER_FORGOT_PASSWORD.REQUEST, handleNewPasswordRequest),
  ]
}
