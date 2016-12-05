import nock from 'nock'
import thunk from 'redux-thunk'
import chai from 'chai'
import configureMockStore from 'redux-mock-store'
import chaiJsonEqual from 'chai-json-equal'
import rewire from 'rewire'
import { callApiCreateUser } from './'
import config from '../../../../../config'
import storage from '../../../../../utils/storage'

const ducks = rewire('./')
const receiveError = ducks.__get__('receiveError')
const receiveSuccess = ducks.__get__('receiveSuccess')
const expect = chai.expect
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const postData = {
  username: 'test@mail.com',
  email: 'test@mail.com',
  password: 'test',
  gender: 'Mr',
  firstName: 'test_prenom',
  lastName: 'test_nom',
  mobilePhone: '0623456789',
  postalCode: '92210'
}

chai.use(chaiJsonEqual)

afterEach(() => {
  nock.cleanAll()
})

it('receiveError', () => {
  expect(receiveError('test')).to.eql({ type: 'SIGNUP_ERROR', response: 'test' })
})


it('receiveSuccess', () => {
  expect(receiveSuccess('test')).to.eql({ type: 'SIGNUP_SUCCESS', response: 'test' })
})

it('send data to API', () => {
  storage.setItem('access_token', 'jkhghfdxfgv54545')
  storage.setItem('access_token_expires', Date.now() / 1000)

  nock(config.apiUrl)
    .post('/users', postData, 'en_GB')
    .reply(201)

  const store = mockStore()

  return store.dispatch(callApiCreateUser(postData))
    .then(() => {
      expect(store.getActions()[0].response.status).to.equal(201)
    })
})
