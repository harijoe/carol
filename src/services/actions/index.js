import { fromJS } from 'immutable'
import { put, call } from 'redux-saga/effects'
import { request, getTokenSaga } from '../auth/ducks'

const FETCH = 'FETCH'
const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

export const initialAction = fromJS({
  request: null,
  success: null,
  failure: null
})

const action = (type, payload = {}) => {
  return {
    type,
    ...payload
  }
}

export function* fetchEntity(entity, grantType, id, url) {
  yield put(entity.get('request')(id))

  try {
    const token = yield call(getTokenSaga, grantType)
    const response = yield call(request, url, 'GET', token)

    yield put(entity.get('success')(response.data['hydra:member'] || response.data))
  } catch (error) {
    yield put(entity.get('failure')())
  }
}

export const createRequestTypes = (base) => {
  return [REQUEST, SUCCESS, FAILURE, FETCH].reduce((acc, type) => {
    acc[type] = `${base}_${type}`

    return acc
  }, {})
}

export default action
