import { call, fork } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'

import { USER_DETAILS, USER_UPDATE, profile, profileUpdate } from './actions'
import api from 'services/api'
import fetch from 'utils/fetchSagas'
import config from 'config'

function* updateProfile({ data, id, resolve, reject }) {
  return yield call(fetch, profileUpdate, null, resolve, reject, api.put, id, {}, data)
}

function* getProfile({ resolve, reject }) {
  return yield call(fetch, profile, null, resolve, reject, api.get, config.profileUrl)
}

function* watchGetProfile() {
  yield call(takeLatest, USER_DETAILS.REQUEST, getProfile)
}

function* watchUpdateProfile() {
  yield call(takeLatest, USER_UPDATE.REQUEST, updateProfile)
}

export default function* () {
  yield fork(watchGetProfile)
  yield fork(watchUpdateProfile)
}
