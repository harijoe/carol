import { fromJS } from 'immutable'
import { call } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'
import actionTypes, { createRequestTypes, fetchEntity, initialAction } from '../../../../services/actions'
import config from '../../../../config'
import { getCurrentCountry } from '../../../../utils/locale'

/*
Const and Type
 */

/** global: PRO_LIST */
const PRO_LIST = createRequestTypes('PRO_LIST')

const getProsActions = () => {
  return initialAction
    .set('request', (value) => {
      return actionTypes(PRO_LIST.REQUEST, { value })
    })
    .set('success', (pros) => {
      return actionTypes(PRO_LIST.SUCCESS, { pros })
    })
    .set('failure', () => {
      return actionTypes(PRO_LIST.FAILURE)
    })
}

/*
Actions
 */

export const fetchPro = fetchEntity.bind(null, getProsActions(), 'client_credentials')

export function* searchPros({ value }) {
  const countryCodeQueryParam = `countryCode=${getCurrentCountry()}`
  const tradeQueryParam = value ? `&trade=${value}` : ''
  const url = `${config.apiUrl}/companies?${countryCodeQueryParam}${tradeQueryParam}`

  yield call(fetchPro, value, url)
}

export const loadSearchPros = (value) => {
  return actionTypes(PRO_LIST.FETCH, { value })
}

export function* watchSearchPros() {
  yield takeLatest(PRO_LIST.FETCH, searchPros)
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
  guid: null,
  name: null,
  trade: null
}])

const reducerPros = (state = initialState, action) => {
  const pros = action.pros

  switch (action.type) {
    case PRO_LIST.SUCCESS:
      return transformPros(pros, initialState)
    default:
      return state
  }
}

export default reducerPros
