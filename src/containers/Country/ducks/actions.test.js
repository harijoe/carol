import { countryUpdate } from './'
import chai from 'chai'
import chaiJsonEqual from 'chai-json-equal'

const expect = chai.expect

chai.use(chaiJsonEqual)

it('should dispatch COUNTRY_UPDATE', () => {
  expect(countryUpdate('GB')).to.jsonEqual({ type: 'COUNTRY_UPDATE', country: 'GB' })
})
