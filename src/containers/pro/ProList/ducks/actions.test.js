import chai from 'chai'
import chaiJsonEqual from 'chai-json-equal'
import { call } from 'redux-saga/effects'
import { take } from 'redux-saga'
import { searchPros, fetchPro, loadSearchPros } from './'
import config from '../../../../config'

const expect = chai.expect

chai.use(chaiJsonEqual)

it('searchPros()', () => {
  const gen = searchPros({ value: 'test' })

  expect(gen.next().value).to.be.jsonEqual(call(fetchPro, 'test', `${config.apiUrl}/companies?countryCode=GB&trade=test`))
  expect(gen.next()).to.be.jsonEqual({ done: true, value: undefined })
})

it('loadSearchPros()', () => {
  expect(loadSearchPros('test')).to.be.jsonEqual({ type: 'PRO_LIST_FETCH', value: 'test' })
})
