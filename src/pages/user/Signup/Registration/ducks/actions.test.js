import nock from 'nock'
import thunk from 'redux-thunk'
import chai from 'chai'
import configureMockStore from 'redux-mock-store'
import chaiJsonEqual from 'chai-json-equal'
import rewire from 'rewire'
import { postSignup } from './'

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
  phone: '0123456789'
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
  nock('http://localhost/app_dev.php')
    .post('/users', postData)
    .reply(201)

  const store = mockStore()

  return store.dispatch(postSignup(postData))
    .then(() => {
      expect(store.getActions()[0].response.status).to.equal(201)
    })
})
