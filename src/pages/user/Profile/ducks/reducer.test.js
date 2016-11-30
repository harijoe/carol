import chai, { expect } from 'chai'
import chaiJsonEqual from 'chai-json-equal'
import { fromJS } from 'immutable'
import userReducer from './'

chai.use(chaiJsonEqual)

describe('userReducer', () => {
  context('state and action.type = null', function () {
    it('should be null!', function () {
      expect(userReducer(null, 'non existing type')).to.be.null
    })
  })

  context('Receive AUTH_TOKEN', function () {
    it('state should be initialState!', function () {
      const initialState = fromJS({
        id: null,
        gender: '',
        firstName: '',
        lastName: '',
        mobilePhone: '',
        fixedPhone: '',
        address: '',
        postalCode: '',
        imageUrl: '',
        imageBase64: '',
        error: null
      })

      expect(userReducer(initialState, { type: 'AUTH_TOKEN', grantType: 'otherGrantType' })).to.be.jsonEqual(initialState)
    })
  })

  context('Receive USER_LOGOUT', function () {
    it('should be initialState when user is logging out!', function () {
      const state = fromJS({
        id: '/users/65456-dfx45-dxfg',
        gender: 'Mr',
        firstName: 'firstName',
        lastName: 'lastName',
        mobilePhone: '+33606060606',
        fixedPhone: '',
        address: '1 rue de test',
        postalCode: '92210',
        imageUrl: 'http://image.test',
        imageBase64: 'imageBase64',
        error: null
      })
      const initialState = fromJS({
        id: null,
        gender: '',
        firstName: '',
        lastName: '',
        mobilePhone: '',
        fixedPhone: '',
        address: '',
        postalCode: '',
        errors: [],
        imageUrl: '',
      })

      expect(userReducer(state, { type: 'USER_LOGOUT' })).to.be.jsonEqual(initialState)
    })
  })

  context('Receive USER_INFO', function() {
    it('should be an object!', function() {
      const user = {
        '@id': 'user/drfgxdf-xdfgxdfg54-54x5dg',
        gender: 'Mr',
        firstName: 'firstName',
        lastName: 'lastName',
        fixedPhone: '0106060606',
        mobilePhone: '+33612456789',
        address: '1 rue de test',
        postalCode: '92210',
        imageUrl: 'http://image.test',
        errors: []
      }
      const action = {
        type: 'USER_INFO',
        payload: user
      }
      const initialState = fromJS({
        id: null,
        gender: '',
        firstName: '',
        lastName: '',
        mobilePhone: '',
        fixedPhone: '',
        address: '',
        postalCode: '',
        imageUrl: '',
        errors: []
      })

      expect(userReducer(initialState, action)).to.jsonEqual(fromJS({ id: "user/drfgxdf-xdfgxdfg54-54x5dg", gender: "Mr", firstName: "firstName", lastName: "lastName", mobilePhone: "+33612456789", fixedPhone: "0106060606", address: "1 rue de test", postalCode: "92210", errors: [], imageUrl: user.imageUrl }))

    })
  })
})
