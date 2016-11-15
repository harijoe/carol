import nock from 'nock'
import chai from 'chai'
import chaiJsonEqual from 'chai-json-equal'
import rewire from 'rewire'

const ducks = rewire('./')
const receiveError = ducks.__get__('receiveError')
const receiveSuccess = ducks.__get__('receiveSuccess')
const expect = chai.expect

chai.use(chaiJsonEqual)

afterEach(() => {
  nock.cleanAll()
})

it('receiveError', () => {
  expect(receiveError('test')).to.eql({ type: 'RESET_PASSWORD_ERROR', response: 'test' })
})


it('receiveSuccess', () => {
  expect(receiveSuccess('test')).to.eql({ type: 'RESET_PASSWORD_SUCCESS', response: 'test' })
})
