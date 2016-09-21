import nock from 'nock'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import login from '../../../actions/user/login'
var chai = require('chai')
var chaiJsonEqual = require('chai-json-equal');
var expect = chai.expect

chai.use(chaiJsonEqual);
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

afterEach(() => {
  nock.cleanAll()
})

it('dispatch LOGIN_BAD_REQUEST with a wrong credential', () => {
  const username = 'myname';
  const password = 'password';

  nock('http://192.168.33.10/app_dev.php')
    .get(`/oauth/v2/token?client_id=2_4qhq3n20xi4gww0gokc0k44k0ss48ssw4g88kgg8kkkscgco0k&client_secret=4aoyh39n19usgos8ss0osscwg8ogkgkg0wcw0wkkg0kkow8gwc&grant_type=password&username=${username}&password=${password}`)
    .reply(400)

  const expectedActions = [
    {
      type: 'LOGIN_BAD_REQUEST'
    },
  ]
  const store = mockStore()
  return store.dispatch(login({ username, password }))
    .then(() => {
      expect(store.getActions()).to.jsonEqual(expectedActions)
    })
})

it('dispatch AUTH_TOKEN with a good credential', () => {
  const username = 'myname';
  const password = 'password';
  const jsonResponse = {
    username
  }

  nock('http://192.168.33.10/app_dev.php')
    .get(`/oauth/v2/token?client_id=2_4qhq3n20xi4gww0gokc0k44k0ss48ssw4g88kgg8kkkscgco0k&client_secret=4aoyh39n19usgos8ss0osscwg8ogkgkg0wcw0wkkg0kkow8gwc&grant_type=password&username=${username}&password=${password}`)
    .reply(200, jsonResponse)

  const expectedActions = [
    {
      type: 'AUTH_TOKEN',
      payload: jsonResponse
    },
  ]
  const store = mockStore()

  return store.dispatch(login({ username, password }))
    .then(() => {
      expect(store.getActions()).to.jsonEqual(expectedActions)
    })
})
