import nock from 'nock'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import { fetchData } from './'
import chai from 'chai'
import chaiJsonEqual from 'chai-json-equal'
import storage from '../../../utils/storage'
import config from '../../../config'

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

it('should dispatch LATEST_PROJECTS_ON_MAP_RECEIVE with projects', () => {
  storage.setItem('access_token', access_token)
  storage.setItem('access_token_expires', Date.now() / 1000)

  const jsonResponse = {
    'hydra:member': dataList
  }

  nock(config.apiUrl)
    .get(`/posts?tag[]=inspiration&tag[]=last-project&itemsPerPage=3&order[project_date]=DESC`)
    .reply(200, jsonResponse)

  const expectedActions = [
    {
      type: 'LATEST_PROJECTS_ON_MAP_RECEIVE',
      projects: dataList
    },
  ]
  const store = mockStore()

  return store.dispatch(fetchData(['inspiration', 'last-project'], 3))
    .then(() => {
      expect(store.getActions()).to.jsonEqual(expectedActions)
    })
})
