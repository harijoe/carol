import chai, { expect } from 'chai'
import chaiJsonEqual from 'chai-json-equal'
import { fromJS } from 'immutable'
import signupReducer from './'

chai.use(chaiJsonEqual)

describe('signupReducer', function() {
  const actionSignupBadRequest = {
    type: 'SIGNUP_SUCCESS',
    response: {
      status: 400
    }
  }
  const actionSignupError = {
    type: 'SIGNUP_ERROR',
    response: {
      status: 404,
      data: {
        violations: [{
          message: 'test_error'
        }]
      }
    }
  }
  const initialState = fromJS({
    status: 0,
    errors: []
  })

  context('state = initialState and action.type = SIGNUP_SUCCESS', function() {
    it('should be an with the status 400', function() {
      expect(signupReducer(initialState, actionSignupBadRequest)).to.jsonEqual(initialState.set('status', 400))
    })
  })

  context('state = initialState and action.type = SIGNUP_ERROR', function() {
    const expected = fromJS({
      status: 404,
      errors: [
        'test_error'
      ]
    })

    it('should be an object with status 404 and the right error sentence', function() {
      expect(signupReducer(initialState, actionSignupError)).to.jsonEqual(expected)
    })
  })
})
