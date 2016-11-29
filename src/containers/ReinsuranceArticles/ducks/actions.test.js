import nock from 'nock'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import { fetchData } from './'
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
const dataList = [
  {
    'id': 1,
    'title': 'Post title 1',
    'body': 'body content 1',
    'image': 'image.jpg',
    'slug': 'post-title'
  },
  {
    'id': 2,
    'title': 'Post title 2',
    'body': 'body content 2',
    'image': 'image.jpg',
    'slug': 'post-title'
  }
]

afterEach(() => {
  nock.cleanAll()
  storage.clear()
})

it('should dispatch REINSURANCE_ARTICLES_RECEIVE with articles', () => {
  storage.setItem('access_token', access_token)
  storage.setItem('access_token_expires', Date.now() / 1000)

  const jsonResponse = {
    'hydra:member': dataList
  }

  nock(config.apiUrl)
    .get(`/posts?tag[]=quotatis-reinsurance&itemsPerPage=3&order[project_date]=DESC`)
    .reply(200, jsonResponse)

  const expectedActions = [
    {
      type: 'REINSURANCE_ARTICLES_RECEIVE',
      articles: dataList
    },
  ]
  const store = mockStore()

  return store.dispatch(fetchData(['quotatis-reinsurance'], 3))
    .then(() => {
      expect(store.getActions()).to.jsonEqual(expectedActions)
    })
})
