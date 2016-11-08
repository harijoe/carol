import chai from 'chai'
import chaiJsonEqual from 'chai-json-equal'
import { call } from 'redux-saga/effects'
import { take } from 'redux-saga'
import { loadPro, fetchPro, loadProSearch } from './'

const expect = chai.expect

chai.use(chaiJsonEqual)

it('loadPro()', () => {
  const gen = loadPro({ value: 'test' })

  expect(gen.next().value).to.be.jsonEqual(call(fetchPro, 'test', 'http://localhost/app_dev.php/companies?trade=test'))
  expect(gen.next()).to.be.jsonEqual({ done: true, value: undefined })
})

it('loadProSearch()', () => {
  expect(loadProSearch('test')).to.be.jsonEqual({ type: 'PRO_LIST_FETCH', value: 'test' })
})
