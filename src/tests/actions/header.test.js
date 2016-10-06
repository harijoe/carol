import countryUpdate from '../../actions/header'

const chai = require('chai')
const chaiJsonEqual = require('chai-json-equal')
chai.use(chaiJsonEqual)
const expect = chai.expect

it('should dispatch COUNTRY_UPDATE', () => {
  expect(countryUpdate('GB')).to.jsonEqual({ type: 'COUNTRY_UPDATE', country: 'GB' })
})
