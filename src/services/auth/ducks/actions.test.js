import nock from 'nock'
import thunk from 'redux-thunk'
import chai from 'chai'
import configureMockStore from 'redux-mock-store'
import chaiJsonEqual from 'chai-json-equal'
import { logout, login } from './'
import storage from '../../../utils/storage';

const expect = chai.expect
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

chai.use(chaiJsonEqual)


afterEach(() => {
  nock.cleanAll()
  storage.clear()
})


it('dispatch LOGIN_BAD_REQUEST with a wrong credential', () => {
  const username = 'myname'
  const password = 'password'

  nock('http://localhost/app_dev.php')
    .get(`/oauth/v2/token?client_id=4qhq3n20xi4gww0gokc0k44k0ss48ssw4g88kgg8kkkscgco0k&client_secret=4aoyh39n19usgos8ss0osscwg8ogkgkg0wcw0wkkg0kkow8gwc&grant_type=password&username=${username}&password=${password}`)
    .reply(400)

  const expectedActions = [
    {
      type: 'LOGIN_BAD_REQUEST'
    }
  ]
  const store = mockStore()

  return store.dispatch(login({ username, password }))
    .then(() => {
      expect(store.getActions()).to.jsonEqual(expectedActions)
    })
})

it('dispatch LOGIN_ERROR', () => {
  const username = 'myname'
  const password = 'password'

  nock('http://localhost/app_dev.php')
    .get(`/oauth/v2/token?client_id=4qhq3n20xi4gww0gokc0k44k0ss48ssw4g88kgg8kkkscgco0k&client_secret=4aoyh39n19usgos8ss0osscwg8ogkgkg0wcw0wkkg0kkow8gwc&grant_type=password&username=${username}&password=${password}`)
    .reply(500)

  const expectedActions = [
    {
      type: 'LOGIN_ERROR'
    }
  ]
  const store = mockStore()

  return store.dispatch(login({ username, password }))
    .then(() => {
      expect(store.getActions()).to.jsonEqual(expectedActions)
    })
})

it('dispatch AUTH_TOKEN with a good credential', () => {
  const username = 'myname'
  const password = 'password'
  const jsonResponse = {
    username
  }

  nock('http://localhost/app_dev.php')
    .get(`/oauth/v2/token?client_id=4qhq3n20xi4gww0gokc0k44k0ss48ssw4g88kgg8kkkscgco0k&client_secret=4aoyh39n19usgos8ss0osscwg8ogkgkg0wcw0wkkg0kkow8gwc&grant_type=password&username=${username}&password=${password}`)
    .reply(200, jsonResponse)

  const expectedActions = [
    {
      type: 'AUTH_TOKEN',
      grantType: 'password'
    },
  ]
  const store = mockStore()

  return store.dispatch(login({ username, password }))
    .then(() => {
      expect(store.getActions()).to.jsonEqual(expectedActions)
    })
})

context('logged HO', () => {
  before(() => {
    storage.setItem('access_token', 'xf6f4xd646dx6f65x6ffgbx6f65x6f4x6fx')
    storage.setItem('refresh_token', 'xf6f4xd646dx6f65x6ffgbx6f65x6f4x')
  })

  after(() => {
    storage.removeItem('access_token')
    storage.removeItem('refresh_token')
  })

  it('should logout', () => {
    const expectedActions = {
      type: 'USER_LOGOUT'
    }

    expect(logout()).to.jsonEqual(expectedActions)
  })
})
