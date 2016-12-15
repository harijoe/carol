import { fromJS } from 'immutable'
import { call } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'
import actionTypes, { createRequestTypes, fetchEntity, initialAction } from '../../../../services/actions'
import config from '../../../../config'

/*
Const and Type
 */

/** global: PRO */
const PRO = createRequestTypes('PRO')

const getProActions = () => {
  return initialAction
    .set('request', (value) => {
      return actionTypes(PRO.REQUEST, { value })
    })
    .set('success', (pro) => {
      return actionTypes(PRO.SUCCESS, { pro })
    })
    .set('failure', () => {
      return actionTypes(PRO.FAILURE)
    })
}

/*
Actions
 */

export const fetchPro = fetchEntity.bind(null, getProActions(), 'client_credentials')

export function* getPro({ value }) {
  const url = `${config.apiUrl}/companies/${value}`

  yield call(fetchPro, value, url)
}

export const loadPro = (value) => {
  return actionTypes(PRO.FETCH, { value })
}

export function* watchGetPro() {
  yield takeLatest(PRO.FETCH, getPro)
}

/*
Reducer
 */
const transformPro = (pro, state) => {
  state = state
    .set('id', pro['@id'] || null)
    .set('guid', pro.guid || null)
    .set('logoUrl', pro.logoUrl || null)
    .set('name', pro.name || null)
    .set('postalCode', pro.postalCode || null)
    .set('city', pro.city || null)
    .set('countryCode', pro.countryCode || null)
    .set('registrationNumber', pro.registrationNumber || null)
    .set('description', pro.description || null)
    .set('websiteUrl', pro.websiteUrl || null)
    .set('employeesNumber', pro.employeesNumber || null)
    .set('clientSince', pro.clientSince || null)
    .set('trade', pro.trade || null)
    .set('certificateName', pro.certificateName || null)

  return state
}

const initialState = fromJS({
  id: null,
  guid: null,
  logoUrl: null,
  name: null,
  postalCode: null,
  city: null,
  countryCode: null,
  registrationNumber: null,
  description: null,
  websiteUrl: null,
  employeesNumber: null,
  clientSince: null,
  trade: null,
  certificateName: null,
})

const reducerPro = (state = initialState, action) => {
  const pro = action.pro

  switch (action.type) {
    case PRO.SUCCESS:
      return transformPro(pro, initialState)
    default:
      return state
  }
}

export default reducerPro
