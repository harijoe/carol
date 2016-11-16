import nock from 'nock'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import { getContent } from './'
import chai from 'chai'
import chaiJsonEqual from 'chai-json-equal'

chai.use(chaiJsonEqual)
const expect = chai.expect
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const access_token = 'NjA5NDE3MTIwN2IxNjQ4ZjFmM2ZiYWViMWJiM2ZhMGFhMTBhMGE0Y2RmMTU2NjFjODJjMGRlNzFmZDEyZjk1NQ'
const contentData = [
  {
    'title': 'Post title 1',
    'body': 'body content 1'
  },
  {
    'title': 'Post title 2',
    'body': 'body content 2'
  }
]

afterEach(() => {
  nock.cleanAll()
  localStorage.clear()
})

it('should dispatch CONTENT_RECEIVE with articles', () => {
  localStorage.setItem('access_token', access_token)

  const jsonResponse = {
    'hydra:member': contentData
  }

  nock('http://localhost/app_dev.php')
    .get(`/posts`)
    .reply(200, jsonResponse)

  const expectedActions = [
    {
      type: 'CONTENT_RECEIVE',
      content: contentData
    },
  ]
  const store = mockStore()

  return store.dispatch(getContent())
    .then(() => {
      expect(store.getActions()).to.jsonEqual(expectedActions)
    })
})