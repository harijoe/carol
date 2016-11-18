import nock from 'nock'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import { getContent } from './'
import chai from 'chai'
import chaiJsonEqual from 'chai-json-equal'
import storage from '../../../utils/storage'
import config from '../../../config'

/** global: localStorage */

chai.use(chaiJsonEqual)
const expect = chai.expect
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const access_token = 'NjA5NDE3MTIwN2IxNjQ4ZjFmM2ZiYWViMWJiM2ZhMGFhMTBhMGE0Y2RmMTU2NjFjODJjMGRlNzFmZDEyZjk1NQ'
const contentData = [
  {
    'id': 1,
    'title': 'Post title 1',
    'body': 'body content 1',
    'image': 'image.jpg',
    'slug': 'post-title',
    'longitude': '123.45',
    'latitude': '1.23'
  },
  {
    'id': 2,
    'title': 'Post title 2',
    'body': 'body content 2',
    'image': 'image.jpg',
    'slug': 'post-title',
    'longitude': '123.45',
    'latitude': '1.23'
  }
]

afterEach(() => {
  nock.cleanAll()
  storage.clear()
})

it('should dispatch CONTENT_LIST_RECEIVE with articles', () => {
  storage.setItem('access_token', access_token)

  const jsonResponse = {
    'hydra:member': contentData
  }

  nock(config.apiUrl)
    .get(`/posts?tag[]=inspiration&tag[]=last-project&order[project_date]=DESC`)
    .reply(200, jsonResponse)

  const expectedActions = [
    {
      type: 'CONTENT_LIST_RECEIVE',
      content: contentData
    },
  ]
  const store = mockStore()

  return store.dispatch(getContent(['inspiration', 'last-project']))
    .then(() => {
      expect(store.getActions()).to.jsonEqual(expectedActions)
    })
})
