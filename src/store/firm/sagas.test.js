Object.defineProperty(window.location, 'hostname', {
  writable: true,
  value: 'carol-co-uk.dev.quotatis.net',
})

import { take, put, call, fork } from 'redux-saga/effects'
import * as actions from './actions'
import api from 'services/api'
import { getToken } from 'utils/token'
import saga, * as sagas from './sagas'

const params = { accessToken: undefined }
const listParams = { params: { homeImprovementId: 'test', servedAreaCityCode: '123' } }

describe('readFirmDetails', () => {
  const guid = 'guid'
  const data = { id: 'uid' }

  it('calls success', () => {
    const generator = sagas.readFirmDetails(guid)

    expect(generator.next().value).toEqual(call(getToken))
    expect(generator.next().value).toEqual(call(api.get, `/firms/${guid}`, params))
    expect(generator.next(data).value).toEqual(put(actions.firmDetails.success(data)))
  })

  it('calls failure', () => {
    const generator = sagas.readFirmDetails(guid)

    expect(generator.next().value).toEqual(call(getToken))
    expect(generator.next().value).toEqual(call(api.get, `/firms/${guid}`, params))
    expect(generator.throw('test').value).toEqual(put(actions.firmDetails.failure('test')))
  })
})

describe('readFirmList', () => {
  it('calls success', () => {
    const generator = sagas.readFirmList(['homeImprovementId=test', 'servedAreaCityCode=123'])

    expect(generator.next().value).toEqual(call(getToken))
    expect(generator.next().value).toEqual(call(api.get, '/firms/search?country-code=GB&pro-form-id=test&served-area-city-code=123', params))
    expect(generator.next({ undefined }).value).toEqual(put(actions.firmList.success(undefined)))
  })

  it('calls failure', () => {
    const generator = sagas.readFirmList(['homeImprovementId=test', 'servedAreaCityCode=123'])

    expect(generator.next().value).toEqual(call(getToken))
    expect(generator.next().value).toEqual(call(api.get, '/firms/search?country-code=GB&pro-form-id=test&served-area-city-code=123', params))
    expect(generator.throw('test').value).toEqual(put(actions.firmList.failure('test')))
  })
})

test('watchFirmDetailsRequest', () => {
  const generator = sagas.watchFirmDetailsRequest()

  expect(generator.next().value).toEqual(take(actions.FIRM_DETAILS_REQUEST))
  expect(generator.next(params).value).toEqual(call(sagas.readFirmDetails, ...Object.values(params)))
})

test('watchFirmListRequest', () => {
  const generator = sagas.watchFirmListRequest()

  expect(generator.next().value).toEqual(take(actions.FIRM_LIST_REQUEST))
  expect(generator.next(listParams).value).toEqual(call(sagas.readFirmList, ...Object.values(listParams)))
})

test('saga', () => {
  const generator = saga()

  expect(generator.next().value).toEqual(fork(sagas.watchFirmDetailsRequest))
  expect(generator.next().value).toEqual(fork(sagas.watchFirmListRequest))
})
