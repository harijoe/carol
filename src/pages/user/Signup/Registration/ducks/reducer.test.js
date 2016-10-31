const expect = require('chai').expect
import signupReducer from './'

describe('signupReducer', function() {
  const actionSignupSuccess = {
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
        error_description: null,
        'hydra:description': 'Une erreur s\'est produite, merci de réessayer plus tard'
      }
    }
  }
  const initialState = {
    status: 0,
    error: null
  }

  context('state = null and action.type = SIGNUP_SUCCESS', function() {
    it('should be an object!', function() {
      expect(signupReducer(initialState, actionSignupSuccess)).to.eql({ status: 400, error: null })
    })
  })

  context('state = null and action.type = SIGNUP_ERROR', function() {
    it('should be an object!', function() {
      expect(signupReducer(initialState, actionSignupError)).to.eql({status: 404, error: 'Une erreur s\'est produite, merci de réessayer plus tard'})
    })
  })
})
