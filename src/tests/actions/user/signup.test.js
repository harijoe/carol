import nock from 'nock'
import thunk from 'redux-thunk'
import chai from 'chai'
import configureMockStore from 'redux-mock-store'
import chaiJsonEqual from 'chai-json-equal'
import signup from '../../../actions/user/signup'

const expect = chai.expect
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const postData = {
  username: 'test@mail.com',
  email: 'test@mail.com',
  password: 'test',
  phone: '0123456789'
}

chai.use(chaiJsonEqual)

afterEach(() => {
  nock.cleanAll()
})

it('send data to API', () => {
  nock('http://localhost/app_dev.php')
    .post('/users', postData)
    .reply(201)

  const store = mockStore()

  return store.dispatch(signup(postData))
    .then(() => {
      expect(store.getActions()[0].response.status).to.equal(201)
    })
})
