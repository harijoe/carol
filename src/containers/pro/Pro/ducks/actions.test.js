import chai from 'chai'
import chaiJsonEqual from 'chai-json-equal'
import { call } from 'redux-saga/effects'
import { take } from 'redux-saga'
import { getPro, fetchPro, loadPro } from './'
import config from '../../../../config'

const expect = chai.expect

chai.use(chaiJsonEqual)

it('getPro()', () => {
  const gen = getPro({ value: '111-222-333-444' })

  expect(gen.next().value).to.be.jsonEqual(call(fetchPro, '111-222-333-444', `${config.apiUrl}/companies/111-222-333-444`))
  expect(gen.next()).to.be.jsonEqual({ done: true, value: undefined })
})

it('loadPro()', () => {
  expect(loadPro('111-222-333-444')).to.be.jsonEqual({ type: 'PRO_FETCH', value: '111-222-333-444' })
})
