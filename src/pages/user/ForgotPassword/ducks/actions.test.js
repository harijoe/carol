import nock from 'nock'
import thunk from 'redux-thunk'
import chai from 'chai'
import configureMockStore from 'redux-mock-store'
import chaiJsonEqual from 'chai-json-equal'
import rewire from 'rewire'
import { postForgotPassword } from './'
import config from '../../../../config'

const ducks = rewire('./')
const receiveError = ducks.__get__('receiveError')
const receiveSuccess = ducks.__get__('receiveSuccess')
const expect = chai.expect
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const postData = {
  email: 'test@mail.com'
}

chai.use(chaiJsonEqual)

afterEach(() => {
  nock.cleanAll()
})

it('receiveError', () => {
  expect(receiveError('test')).to.eql({ type: 'FORGOT_PASSWORD_ERROR', response: 'test' })
})


it('receiveSuccess', () => {
  expect(receiveSuccess('test')).to.eql({ type: 'FORGOT_PASSWORD_SUCCESS', response: 'test' })
})

it('send data to API', () => {
  nock(config.apiUrl)
    .post('/forgot-password', postData, 'fr_FR')
    .reply(204)

  const store = mockStore()

  return store.dispatch(postForgotPassword(postData))
    .then(() => {
      expect(store.getActions()[0].response.status).to.equal(204)
    })
})
