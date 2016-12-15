import chai, { expect } from 'chai'
import { fromJS } from 'immutable'
import chaiJsonEqual from 'chai-json-equal'
import proReducer from './'

chai.use(chaiJsonEqual)

describe('proReducer', function() {
  let initialState

  beforeEach(() => {
    initialState = fromJS({
      id: null,
      guid: null,
      logo: null,
      name: null,
      postalCode: null,
      city: null,
      countryCode: null,
      registrationNumber: null,
      description: null,
      websiteUrl: null,
      employeesNumber: null,
      clientSince: null,
      trade: null,
      certificateName: null,
    })
  })
  context('state = initialState and action.type = null', function() {
    it('should be null!', function() {
      expect(proReducer(initialState, 'non existing type')).to.jsonEqual(initialState);
    })
  })

  context('state = initialState and action.type = PRO and no pro returned', function() {
    it('should be an object!', function() {
      const action = {
        type: 'PRO',
        pro: {}
      }
      expect(proReducer(initialState, action)).to.jsonEqual(initialState)
    })
  })

  context('state = initialState and action.type = PRO_SUCCESS and a pro returned', function() {
    it('should be an object!', function() {
      const action = {
        type: 'PRO_SUCCESS',
        pro: {
          '@id': 1,
          guid: '111-222-333-444',
          logoUrl: 'http://www.quotatis.fr/imagesupload/firm_photo/000/189/189902/6182209582e925521ced14d362b4ce0b_thumb.jpg',
          name: 'Mcdo',
          postalCode: '59500',
          city: 'DOUAI',
          countryCode: 'FR',
          registrationNumber: 51525408400046,
          description: 'Desc.',
          websiteUrl: 'www.reseau-afl.fr',
          employeesNumber: '<5',
          clientSince: '1997-03-01T13:48:56+00:00',
          trade: 'Plomberie',
          certificateName: 'QualiSol',
        }
      }

      const state = fromJS({
        id: 1,
        guid: '111-222-333-444',
        logoUrl: 'http://www.quotatis.fr/imagesupload/firm_photo/000/189/189902/6182209582e925521ced14d362b4ce0b_thumb.jpg',
        name: 'Mcdo',
        postalCode: '59500',
        city: 'DOUAI',
        countryCode: 'FR',
        registrationNumber: 51525408400046,
        description: 'Desc.',
        websiteUrl: 'www.reseau-afl.fr',
        employeesNumber: '<5',
        clientSince: '1997-03-01T13:48:56+00:00',
        trade: 'Plomberie',
        certificateName: 'QualiSol',
      })

      expect(proReducer(initialState, action)).to.jsonEqual(state)
    })
  })
})
