import nock from 'nock'
import thunk from 'redux-thunk'
import chai from 'chai'
import configureMockStore from 'redux-mock-store'
import chaiJsonEqual from 'chai-json-equal'
import storage from '../../../../utils/storage'
import { getProfile, updateProfile } from './'
import config from '../../../../config'

const expect = chai.expect
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

chai.use(chaiJsonEqual);

afterEach(() => {
  nock.cleanAll()
})

it('dispatch USER_UNAUTHORIZED', () => {
  storage.setItem('access_token', 'jkhghfdxfgv54545')

  nock(config.apiUrl)
    .get('/users/me')
    .reply(401)

  const expectedActions = [
    {
      type: 'USER_UNAUTHORIZED'
    },
  ]
  const store = mockStore()

  return store.dispatch(getProfile())
    .then(() => {
      expect(store.getActions()).to.jsonEqual(expectedActions)
    })
})

it('dispatch USER_INFO', () => {
  const username ='test@email.com'
  const email ='test@email.com'
  const gender ='Mr'
  const firstName ='test_firstName'
  const lastName ='test_lastName'
  const mobilePhone ='+33612345678'
  const fixedPhone =''
  const address ='1 rue de test'
  const postalCode ='75001'
  const imageUrl ='http://image.test'
  const jsonResponse = {
    username,
    email,
    gender,
    firstName,
    lastName,
    mobilePhone,
    fixedPhone,
    address,
    postalCode,
    imageUrl
  }

  storage.setItem('access_token', 'jkhghfdxfgv54545')

  nock(config.apiUrl)
    .get('/users/me')
    .reply(200, jsonResponse)

  const expectedActions = [
    {
      type: 'USER_INFO',
      payload: {
        username,
        email,
        gender,
        firstName,
        lastName,
        mobilePhone,
        fixedPhone,
        address,
        postalCode,
        imageUrl
      }
    }
  ]
  const store = mockStore()

  return store.dispatch(getProfile())
    .then(() => {
      expect(store.getActions()).to.jsonEqual(expectedActions)
    })
})

it('dispatch USER_UNAUTHORIZED after an updating a wrong profile', () => {
  const id = '/users/xdfgd-xdfgxdfg-5455'

  nock(config.apiUrl)
    .put(id)
    .reply(401)

  const expectedActions = [
    {
      type: 'USER_UNAUTHORIZED',
    }
  ]
  const store = mockStore()

  return store.dispatch(updateProfile({email: 'test@email.com', username: 'test@email.com'}, id))
    .then(() => {
      expect(store.getActions()).to.jsonEqual(expectedActions)
    })
})

it('dispatch USER_ERROR after an updating a wrong profile', () => {
  const id = '/users/xdfgd-xdfgxdfg-5455'

  nock(config.apiUrl)
    .put(id)
    .reply(500)

  const expectedActions = [
    {
      type: 'USER_ERROR',
      payload: '',
      payloadRequest: {
        email: 'test@email.com',
        username: 'test@email.com'
      }
    }
  ]
  const store = mockStore()

  return store.dispatch(updateProfile({email: 'test@email.com', username: 'test@email.com'}, id))
    .then(() => {
      expect(store.getActions()).to.jsonEqual(expectedActions)
    })
})
