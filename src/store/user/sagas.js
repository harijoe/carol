import { put, select } from 'redux-saga/effects'
import { stopSubmit, reset } from 'redux-form'
import { push } from 'react-router-redux'
import { fromUser } from 'store/selectors'
import { HTTPError } from 'utils/errors'

import fetch from 'sagas/fetch'
import notify from 'sagas/notify'
import getFormErrors from 'utils/formErrors'
import { takeLatest } from 'utils/effects'
import transformPhone from 'utils/transformPhone'
import {
    USER_CREATE,
    USER_DETAILS,
    USER_UPDATE,
    USER_UPDATE_PASSWORD,
    USER_FORGOT_PASSWORD,
    USER_VALIDATE_PHONE,
    USER_VALIDATE_PHONE_CODE,
    USER_VALIDATE_PHONE_AGAIN,
    USER_CHECK_PHONE_ON_CODE,
    userCreate,
    userDetails,
    userUpdate,
    forgotPassword,
    resetPassword,
    validatePhone,
    validatePhoneCode,
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

export function* handleGetUserRequest() {
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

function* handlePhoneValidation({ data: { mobilePhone } }) {
  const id = yield select(fromUser.getId)

  try {
    yield* fetch(validatePhone, 'put', `${id}/mobile_phone`, {}, { mobilePhone: transformPhone(mobilePhone) })
    yield put(push('validation/phone/code'))
  } catch (error) {
    if (error instanceof HTTPError) {
      yield put(stopSubmit('PhoneForm', { _error: error.message }))
    }
  }
}

function* redirectToNextStep() {
  // @TODO to be completed
  const mobilePhoneVerified = yield select(fromUser.getMobilePhoneVerified)

  if (!mobilePhoneVerified) {
    yield put(push('validation/phone'))
  }
}

function* handlePhoneCodeValidation({ data }) {
  const id = yield select(fromUser.getId)

  try {
    yield* fetch(validatePhoneCode, 'put', `${id}/mobile_phone_verified`, {}, data)
    yield* redirectToNextStep()
  } catch (error) {
    if (error instanceof HTTPError) {
      yield put(reset('PhoneCodeForm'))
      yield put(stopSubmit('PhoneCodeForm', { _error: error.message }))
    }
  }
}

function* handlePhoneValidationAgain() {
  const mobilePhone = yield select(fromUser.getMobilePhone)

  yield put(reset('PhoneCodeForm'))
  yield* handlePhoneValidation({ data: { mobilePhone } })
}

function* checkPhoneOnCodeValidation() {
  const phone = yield select(fromUser.getMobilePhone)

  if (phone === '') {
    yield put(push('validation/phone'))
  }
}

export default function* () {
  yield [
    takeLatest(USER_CHECK_PHONE_ON_CODE, checkPhoneOnCodeValidation),
    takeLatest(USER_CREATE.REQUEST, handleCreateUserRequest),
    takeLatest(USER_DETAILS.REQUEST, handleGetUserRequest),
    takeLatest(USER_UPDATE.REQUEST, handleUpdateUserRequest),
    takeLatest(USER_UPDATE_PASSWORD.REQUEST, handleUpdatePasswordRequest),
    takeLatest(USER_FORGOT_PASSWORD.REQUEST, handleNewPasswordRequest),
    takeLatest(USER_VALIDATE_PHONE.REQUEST, handlePhoneValidation),
    takeLatest(USER_VALIDATE_PHONE_AGAIN, handlePhoneValidationAgain),
    takeLatest(USER_VALIDATE_PHONE_CODE.REQUEST, handlePhoneCodeValidation),
  ]
}
