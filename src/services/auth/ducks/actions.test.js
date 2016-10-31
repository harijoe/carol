import nock from 'nock'
import thunk from 'redux-thunk'
import chai from 'chai'
import configureMockStore from 'redux-mock-store'
import chaiJsonEqual from 'chai-json-equal'
import { logout, login } from './'

const expect = chai.expect
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

chai.use(chaiJsonEqual)

afterEach(() => {
  nock.cleanAll()
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
    localStorage.setItem('access_token', 'xf6f4xd646dx6f65x6ffgbx6f65x6f4x6fx')
    localStorage.setItem('refresh_token', 'xf6f4xd646dx6f65x6ffgbx6f65x6f4x')
  })

  after(() => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
  })

  it('should logout', () => {
    const expectedActions = {
      type: 'USER_LOGOUT'
    }

    expect(logout()).to.jsonEqual(expectedActions)
    expect(localStorage.getItem('access_token')).to.be.null
    expect(localStorage.getItem('refresh_token')).to.be.null
  })
})
