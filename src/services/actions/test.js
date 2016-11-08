import chai from 'chai'
import { fromJS } from 'immutable'
import chaiJsonEqual from 'chai-json-equal'
import { put, call } from 'redux-saga/effects'
import { createMockTask } from 'redux-saga/utils'
import { take } from 'redux-saga'
import action, { initialAction, fetchEntity, createRequestTypes } from './'
import { getTokenSaga, request } from '../auth/ducks'

const expect = chai.expect

chai.use(chaiJsonEqual)

it('initialAction', () => {
  expect(initialAction).to.be.jsonEqual(fromJS({ request: null, success: null, failure: null }))
})

it('createRequestTypes', () => {
  expect(createRequestTypes('TEST')).to.be.jsonEqual({
    REQUEST: 'TEST_REQUEST',
    SUCCESS: 'TEST_SUCCESS',
    FAILURE: 'TEST_FAILURE',
    FETCH  : 'TEST_FETCH'
  })
})

it('action', () => {
  expect(action('TYPE_TEST', { test: 'test' })).to.be.jsonEqual({ type: 'TYPE_TEST', test: 'test' })
})

it('fetchEntity', () => {
  const entity = fromJS({
    request: (id) => {
      return {
        type: 'TYPE_TEST',
        id
      }
    },
    success: (id) => {
      return {
        type: 'TYPE_TEST_SUCCESS',
        id
      }
    },
    failure: () => {
      return {
        type: 'TYPE_TEST_FAIL'
      }
    }
  })
  const gen = fetchEntity(entity, 'client_crediential', 'test', 'url_test')
  const mockResponse = createMockTask()

  mockResponse.setResult({
    data: {
      'hydra:member': 'test'
    }
  })

  expect(gen.next().value).to.be.jsonEqual(put(entity.get('request')('test')))
  expect(gen.next().value).to.be.jsonEqual(call(getTokenSaga, 'client_crediential'))
  expect(gen.next('kjxfhduighuifghd').value).to.be.jsonEqual(call(request, 'url_test', 'GET', 'kjxfhduighuifghd'))
  expect(gen.next({ data: { 'hydra:member': 'test' } }).value).to.be.jsonEqual(put(entity.get('success')('test')))
  expect(gen.next()).to.be.jsonEqual({ done: true, value: undefined })
})

it('fetchEntity failure', () => {
  const entity = fromJS({
    request: (id) => {
      return {
        type: 'TYPE_TEST',
        id
      }
    },
    success: (id) => {
      return {
        type: 'TYPE_TEST_SUCCESS',
        id
      }
    },
    failure: () => {
      return {
        type: 'TYPE_TEST_FAIL'
      }
    }
  })
  const gen = fetchEntity(entity, 'client_crediential', 'test', 'url_test')

  gen.next()
  gen.next()
  gen.next()

  expect(gen.next(() => { throw 'err' }).value).to.be.jsonEqual(put(entity.get('failure')()))
})
