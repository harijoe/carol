import { fromJS } from 'immutable'
import { call } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'
import actionTypes, { createRequestTypes, fetchEntity, initialAction } from '../../../services/actions'
import config from '../../../config'
import { getCurrentCountry } from '../../../utils/locale'

/*
Const and Type
 */

/** global: PRO */
const PRO = createRequestTypes('PRO_LIST')

const getProActions = () => {
  return initialAction
    .set('request', (value) => {
      return actionTypes(PRO.REQUEST, { value })
    })
    .set('success', (pros) => {
      return actionTypes(PRO.SUCCESS, { pros })
    })
    .set('failure', () => {
      return actionTypes(PRO.FAILURE)
    })
}

/*
Actions
 */

export const fetchPro = fetchEntity.bind(null, getProActions(), 'client_credentials')

export function* loadPro({ value }) {
  const countryCodeQueryParam = `countryCode=${getCurrentCountry()}`
  const tradeQueryParam = value ? `&trade=${value}` : ''
  const url = `${config.apiUrl}/companies?${countryCodeQueryParam}${tradeQueryParam}`

  yield call(fetchPro, value, url)
}

export const loadProSearch = (value) => {
  return actionTypes(PRO.FETCH, { value })
}

export function* watchFetchPro() {
  yield takeLatest(PRO.FETCH, loadPro)
}

/*
Reducer
 */
const transformPros = (pros, state) => {
  let i
  let proCurrent = {}

  for (i = 0; i < pros.length; i++) {
    proCurrent = pros[i]
    state = state
      .setIn([i, 'id'], proCurrent['@id'])
      .setIn([i, 'guid'], proCurrent.guid)
      .setIn([i, 'name'], proCurrent.name)
      .setIn([i, 'trade'], proCurrent.trade)
  }

  return state
}

const initialState = fromJS([{
  id: null,
  name: null,
  trade: null
}])

const reducerPros = (state = initialState, action) => {
  const pros = action.pros

  switch (action.type) {
    case PRO.SUCCESS:
      return transformPros(pros, initialState)
    default:
      return state
  }
}

export default reducerPros
