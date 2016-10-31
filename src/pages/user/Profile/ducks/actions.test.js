import nock from 'nock'
import thunk from 'redux-thunk'
import chai from 'chai'
import configureMockStore from 'redux-mock-store'
import chaiJsonEqual from 'chai-json-equal'
import { getProfile, updateProfile } from './'

const expect = chai.expect
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

chai.use(chaiJsonEqual);

afterEach(() => {
  nock.cleanAll()
})

it('dispatch USER_UNAUTHORIZED', () => {
  localStorage.setItem('access_token', 'jkhghfdxfgv54545')

  nock('http://localhost/app_dev.php')
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
  const username = 'myname'
  const phone ='0606060606'
  const email ='mon@email.com'
  const jsonResponse = {
    email,
    username,
    phone
  }

  localStorage.setItem('access_token', 'jkhghfdxfgv54545')

  nock('http://localhost/app_dev.php')
    .get('/users/me')
    .reply(200, jsonResponse)

  const expectedActions = [
    {
      type: 'USER_INFO',
      payload: {
        email,
        username,
        phone
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

  nock('http://localhost/app_dev.php')
    .put(id)
    .reply(401)

  const expectedActions = [
    {
      type: 'USER_UNAUTHORIZED',
    }
  ]
  const store = mockStore()

  return store.dispatch(updateProfile({email: 'my@email.com', username: 'myname'}, `/app_dev.php${id}`))
    .then(() => {
      expect(store.getActions()).to.jsonEqual(expectedActions)
    })
})

it('dispatch USER_UNAUTHORIZED after an updating a wrong profile', () => {
  const id = '/users/xdfgd-xdfgxdfg-5455'

  nock('http://localhost/app_dev.php')
    .put(id)
    .reply(500)

  const expectedActions = [
    {
      type: 'USER_ERROR',
    }
  ]
  const store = mockStore()

  return store.dispatch(updateProfile({email: 'my@email.com', username: 'myname'}, `/app_dev.php${id}`))
    .then(() => {
      expect(store.getActions()).to.jsonEqual(expectedActions)
    })
})
