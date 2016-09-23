import nock from 'nock'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import chai from 'chai'
import chaiJsonEqual from 'chai-json-equal'
import searchPro from '../../../actions/pro/searchPro'

const expect = chai.expect
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

chai.use(chaiJsonEqual)

afterEach(() => {
  nock.cleanAll()
})

it('dispatch PRO_LIST with a good credential', () => {
  const username = 'myname'
  const jsonResponse = {
    'hydra:member': username
  }

  nock('http://192.168.33.10/app_dev.php')
    .get('/companies?trade=kitchen&access_token=undefined')
    .reply(200, jsonResponse)

  const expectedActions = [
    {
      type: 'PRO_LIST',
      pros: username
    },
  ]
  const store = mockStore()

  return store.dispatch(searchPro('kitchen'))
    .then(() => {
      expect(store.getActions()).to.jsonEqual(expectedActions)
    })
})

it('dispatch PRO_LIST_FAIL if the api return an error', () => {
  nock('http://192.168.33.10/app_dev.php')
    .get('/companies?trade=kitchen&access_token=undefined')
    .reply(400)

  const expectedActions = [
    {
      type: 'PRO_LIST_FAIL'
    },
  ]
  const store = mockStore()

  return store.dispatch(searchPro('kitchen'))
    .then(() => {
      expect(store.getActions()).to.jsonEqual(expectedActions)
    })
})
