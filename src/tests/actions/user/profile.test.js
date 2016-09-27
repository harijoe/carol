import nock from 'nock'
import thunk from 'redux-thunk'
import chai from 'chai'
import configureMockStore from 'redux-mock-store'
import chaiJsonEqual from 'chai-json-equal'
import profile from '../../../actions/user/profile'

const expect = chai.expect
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

chai.use(chaiJsonEqual);

afterEach(() => {
  nock.cleanAll()
})

it('dispatch USER_UNAUTHORIZED', () => {
  nock('http://192.168.33.10/app_dev.php')
    .get('/users/me')
    .reply(401)

  const expectedActions = [
    {
      type: 'USER_UNAUTHORIZED'
    },
  ]
  const store = mockStore()
  return store.dispatch(profile())
    .then(() => {
      expect(store.getActions()).to.jsonEqual(expectedActions)
    })
})

it('dispatch USER_INFO', () => {
  const username = 'myname'
  const jsonResponse = {
    'email': 'mon@email.com',
    'username': username
  }

  nock('http://192.168.33.10/app_dev.php')
    .get('/users/me')
    .reply(200, jsonResponse)

  const expectedActions = [
    {
      type: 'USER_INFO',
      payload: {
        email: 'mon@email.com',
        username: 'myname'
      }
    }
  ]
  const store = mockStore()

  return store.dispatch(profile())
    .then(() => {
      expect(store.getActions()).to.jsonEqual(expectedActions)
    })
})
