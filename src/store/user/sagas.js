import { put, select } from 'redux-saga/effects'
import { stopSubmit, reset } from 'redux-form'
import { push } from 'react-router-redux'
import { fromUser, fromRouting } from 'store/selectors'
import { HTTPError } from 'utils/errors'

import fetch from 'sagas/fetch'
import notify from 'sagas/notify'
import redirectToNextStep from 'sagas/projectValidation'
import getFormErrors from 'utils/formErrors'
import { takeLatest } from 'utils/effects'
import {
    USER_CREATE,
    USER_DETAILS,
    USER_UPDATE,
    USER_UPDATE_PASSWORD,
    USER_FORGOT_PASSWORD,
    USER_VALIDATE_PHONE,
    USER_VALIDATE_PHONE_CODE,
    USER_VALIDATE_EMAIL,
    USER_VALIDATE_PHONE_AGAIN,
    USER_VERIFY_EMAIL,
    userCreate,
    userDetails,
    userUpdate,
    forgotPassword,
    resetPassword,
    validatePhone,
    validatePhoneCode,
    verifyEmail,
    resendEmail,
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

function* handlePhoneValidation({ data }) {
  const id = yield select(fromUser.getId)

  try {
    yield* fetch(validatePhone, 'put', `${id}/mobile_phone`, {}, data)
    const queryString = yield select(fromRouting.getSearch)

    yield put(push(`validation/phone/code${queryString}`))
  } catch (error) {
    if (error instanceof HTTPError) {
      yield put(stopSubmit('PhoneForm', { _error: error.message }))
    }
  }
}

function* handlePhoneCodeValidation({ data }) {
  const id = yield select(fromUser.getId)

  try {
    yield* fetch(validatePhoneCode, 'put', `${id}/mobile_phone_verified`, {}, data)
    yield* notify('user.thank_you', 'user.phone_validated')
    const query = yield select(fromRouting.getQuery)

    yield* redirectToNextStep(query.projectId)
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

function* handleEmailValidation({ data }) {
  try {
    const id = yield select(fromUser.getId)

    yield* fetch(userUpdate, 'put', id, {}, data)
    yield* fetch(resendEmail, 'post', `${id}/actions/send-verification-email`, {}, {})
    yield put(push('validation/email/sent'))
  } catch (error) {
    yield put(stopSubmit('EmailForm', { _error: error.message }))
  }
}

function* handleEmailVerification() {
  const query = yield select(fromRouting.getQuery)
  const token = query.token
  let id = yield select(fromUser.getId)

  if (id == null) {
    yield* fetch(userDetails, 'get', '/users/me')
    id = yield select(fromUser.getId)
  }

  const emailVerified = yield select(fromUser.getEmailVerified)

  if (!emailVerified) {
    try {
      yield* fetch(verifyEmail, 'put', `${id}/email-verified`, {}, { token })
    } catch (e) {
      yield put(push('/'))
    }
  }

  yield* redirectToNextStep()
}

export default function* () {
  yield [
    takeLatest(USER_CREATE.REQUEST, handleCreateUserRequest),
    takeLatest(USER_DETAILS.REQUEST, handleGetUserRequest),
    takeLatest(USER_UPDATE.REQUEST, handleUpdateUserRequest),
    takeLatest(USER_UPDATE_PASSWORD.REQUEST, handleUpdatePasswordRequest),
    takeLatest(USER_FORGOT_PASSWORD.REQUEST, handleNewPasswordRequest),
    takeLatest(USER_VALIDATE_EMAIL.REQUEST, handleEmailValidation),
    takeLatest(USER_VALIDATE_PHONE.REQUEST, handlePhoneValidation),
    takeLatest(USER_VALIDATE_PHONE_AGAIN, handlePhoneValidationAgain),
    takeLatest(USER_VALIDATE_PHONE_CODE.REQUEST, handlePhoneCodeValidation),
    takeLatest(USER_VERIFY_EMAIL.REQUEST, handleEmailVerification),
  ]
}
