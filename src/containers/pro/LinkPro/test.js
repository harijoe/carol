import chai from 'chai'
import React from 'react'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import rewire from 'rewire'
import { fromJS } from 'immutable'

const expect = chai.expect
const LinkProConnect = rewire('./')
const LinkPro = LinkProConnect.__get__('LinkPro')

chai.use(chaiEnzyme())

describe('LinkPro', () => {
  it('should return url pro uk', () => {
    const enzymeWrapper  = shallow(<LinkPro countryCode='GB' />)

    expect(enzymeWrapper).to.have.html('<a href="https://www.quotatispro.co.uk">Je suis artisan</a>')
  })

  it('should return url pro fr', () => {
    const enzymeWrapper  = shallow(<LinkPro countryCode='FR' />)

    expect(enzymeWrapper).to.have.html('<a href="https://www.quotatispro.fr">Je suis artisan</a>')
  })

  it('should return url pro es', () => {
    const enzymeWrapper  = shallow(<LinkPro countryCode='ES' />)

    expect(enzymeWrapper).to.have.html('<a href="https://www.quotatispro.es">Je suis artisan</a>')
  })

  it('mapStateToProps should return an object with countryCode field', () => {
    const mapStateToProps = LinkProConnect.__get__('mapStateToProps')
    const state = {
      country: fromJS({
        countryCode: 'ES'
      })
    }

    expect(mapStateToProps(state)).to.jsonEqual({countryCode: 'ES'})
  })
})
