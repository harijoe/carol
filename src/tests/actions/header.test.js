import countryUpdate from '../../actions/header'
import chai from 'chai'
import chaiJsonEqual from 'chai-json-equal'

chai.use(chaiJsonEqual)
const expect = chai.expect

it('should dispatch COUNTRY_UPDATE', () => {
  expect(countryUpdate('GB')).to.jsonEqual({ type: 'COUNTRY_UPDATE', country: 'GB' })
})
