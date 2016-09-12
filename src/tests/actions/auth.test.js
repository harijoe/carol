import nock from 'nock'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import * as actions from '../../actions/auth'
var chai = require('chai')
var expect = chai.expect
import * as types from '../../constants/actionTypes'
import Config from '../../config'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates AUTH_TOKEN', () => {
    const jsonResp =
    {
      resp: 'resp'
    }
    const username = 'myname';

    nock('http://localhost/app_dev.php/api/')
      .get(`/oauth/v2/token?%0A%20%20%20%20client_id=undefined%0A%20%20%20%20&client_secret=undefined%0A%20%20%20%20&grant_type=password%0A%20%20%20%20%20%20&username=${username}%0A%20%20%20%20%20%20&password=password`)
      .reply(200, jsonResp)

    const expectedActions = [
      { type: types.AUTH_TOKEN },
    ]
    /*const store = mockStore()
console.log(actions);
    return store.dispatch(actions.login({ username: username, password: 'password' }))
      .then(() => {
        expect(store.getActions()).to.jsonEqual(expectedActions)
      })*/
  })
})
