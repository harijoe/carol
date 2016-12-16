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
        email: null,
        facebookId: '',
        googleId: '',
        gender: '',
        firstName: '',
        lastName: '',
        address: '',
        postalCode: '',
        city: '',
        region: '',
        countryCode: '',
        mobilePhone: '',
        fixedPhone: '',
        birthday: '',
        imageUrl: '',
        preferedLanguage: '',
        newsletterSubscription: false,
        errors: []
      })

      expect(userReducer(initialState, { type: 'AUTH_TOKEN', grantType: 'otherGrantType' })).to.be.jsonEqual(initialState)
    })
  })

  context('Receive USER_LOGOUT', function () {
    it('should be initialState when user is logging out!', function () {
      const state = fromJS({
        id: '/users/65456-dfx45-dxfg',
        email: 'test@email.com',
        facebookId: 'facebookId',
        googleId: 'googleId',
        gender: 'Mr',
        firstName: 'firstName',
        lastName: 'lastName',
        address: '1 rue de test',
        postalCode: '92210',
        city: 'Paris',
        region: 'Ile de france',
        countryCode: 'FR',
        mobilePhone: '+33606060606',
        fixedPhone: '+33106060606',
        birthday: '01/01/2016',
        imageUrl: 'http://image.test',
        imageBase64: 'imageBase64',
        preferedLanguage: 'fr',
        newsletterSubscription: true,
        errors: []
      })
      const initialState = fromJS({
        id: null,
        email: null,
        facebookId: '',
        googleId: '',
        gender: '',
        firstName: '',
        lastName: '',
        address: '',
        postalCode: '',
        city: '',
        region: '',
        countryCode: '',
        mobilePhone: '',
        fixedPhone: '',
        birthday: '',
        imageUrl: '',
        preferedLanguage: '',
        newsletterSubscription: false,
        errors: [],
      })

      expect(userReducer(state, { type: 'USER_LOGOUT' })).to.be.jsonEqual(initialState)
    })
  })

  context('Receive USER_INFO', function() {
    it('should be an object!', function() {
      const user = {
        '@id': 'user/drfgxdf-xdfgxdfg54-54x5dg',
        email: 'test@email.com',
        facebookId: 'facebookId',
        googleId: 'googleId',
        gender: 'Mr',
        firstName: 'firstName',
        lastName: 'lastName',
        address: '1 rue de test',
        postalCode: '92210',
        city: 'Paris',
        region: 'Ile de france',
        countryCode: 'FR',
        mobilePhone: '+33606060606',
        fixedPhone: '+33106060606',
        birthday: '01/01/2016',
        imageUrl: 'http://image.test',
        imageBase64: 'imageBase64',
        preferedLanguage: 'fr',
        newsletterSubscription: true,
        errors: []
      }
      const action = {
        type: 'USER_INFO',
        payload: user
      }
      const initialState = fromJS({
        id: null,
        email: null,
        facebookId: '',
        googleId: '',
        gender: '',
        firstName: '',
        lastName: '',
        address: '',
        postalCode: '',
        city: '',
        region: '',
        countryCode: '',
        mobilePhone: '',
        fixedPhone: '',
        birthday: '',
        imageUrl: '',
        preferedLanguage: '',
        newsletterSubscription: false,
        errors: []
      })

      expect(userReducer(initialState, action)).to.jsonEqual(fromJS({
        id: "user/drfgxdf-xdfgxdfg54-54x5dg",
        email: 'test@email.com',
        facebookId: 'facebookId',
        googleId: 'googleId',
        gender: 'Mr',
        firstName: 'firstName',
        lastName: 'lastName',
        address: '1 rue de test',
        postalCode: '92210',
        city: 'Paris',
        region: 'Ile de france',
        countryCode: 'FR',
        mobilePhone: '+33606060606',
        fixedPhone: '+33106060606',
        birthday: '01/01/2016',
        imageUrl: 'http://image.test',
        preferedLanguage: 'fr',
        newsletterSubscription: true,
        errors: []
      }))
    })
  })
})
