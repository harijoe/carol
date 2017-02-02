import actions, { createRequestTypes } from './'

describe('Service actions', () => {
  it('should render an object with type and payload ', () => {
    expect(actions('ACTION_TYPE', { grantType: 'client_credentials', credentials: 'test_credentials' })).toEqual({
      type: 'ACTION_TYPE',
      grantType: 'client_credentials',
      credentials: 'test_credentials',
    })
  })

  it('should render request types with suffix REQUEST, SUCCESS and FAILURE', () => {
    expect(createRequestTypes('TEST')).toEqual({
      REQUEST: 'TEST_REQUEST',
      SUCCESS: 'TEST_SUCCESS',
      FAILURE: 'TEST_FAILURE',
    })
  })
})
