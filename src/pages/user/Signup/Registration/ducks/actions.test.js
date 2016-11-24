import nock from 'nock'
import thunk from 'redux-thunk'
import chai from 'chai'
import configureMockStore from 'redux-mock-store'
import chaiJsonEqual from 'chai-json-equal'
import rewire from 'rewire'
import { callApiUserCreate } from './'
import config from '../../../../../config'

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
  zipCode: '92210'
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
  localStorage.setItem('access_token', 'jkhghfdxfgv54545')
  nock(config.apiUrl)
    .post('/users', postData, 'en_GB')
    .reply(201)

  const store = mockStore()

  return store.dispatch(callApiUserCreate(postData))
    .then(() => {
      expect(store.getActions()[0].response.status).to.equal(201)
    })
})
