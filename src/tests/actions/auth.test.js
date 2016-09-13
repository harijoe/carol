import nock from 'nock'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import login from '../../actions/auth'
var chai = require('chai')
var expect = chai.expect
import * as types from '../../constants/actionTypes'
import Config from '../../config'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

/*describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates AUTH_TOKEN', () => {
    const jsonResp =
    {
      resp: 'resp'
    }
    const username = 'myname';

    nock('http://api-fake/app_dev.php/api')
      .get(`/oauth/v2/token?client_id=1_1x7wyo33dxs0wc4c0gokcs4s4soook04wooo4cwsckk8g4k8s8&client_secret=ylgb972rcsg0wksg0scooo4wcc0sg8swkgo8ccck08go40koc&grant_type=password&username=myname&password=password`)
      .reply(200, jsonResp)

    const expectedActions = [
      {
        type: 'AUTH_TOKEN',
        payload: jsonResp
      },
    ]
    const store = mockStore()
    return store.dispatch(login({ username: username, password: 'password' }))
      .then(() => {
        expect(store.getActions()).to.jsonEqual(expectedActions)
      })
  })
})*/
