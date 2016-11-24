import chai from 'chai'
import React from 'react'
import rewire from 'rewire'
import { fromJS } from 'immutable'
import chaiEnzyme from 'chai-enzyme'
import mountWithContext from '../../../utils/ContextEnzymeTestHelper'

chai.use(chaiEnzyme())
const expect = chai.expect
const LinkProConnect = rewire('./')
const LinkPro = LinkProConnect.__get__('LinkPro')

describe('LinkPro', () => {
  it('should return url pro uk', () => {
    const enzymeWrapper  = mountWithContext(<LinkPro countryCode='GB' />)

    expect(enzymeWrapper.find('a')).to.have.length(1)
    expect(enzymeWrapper.find('a')).to.have.attr('href', 'https://www.quotatispro.co.uk')
    expect(enzymeWrapper.find('a').text()).to.equal('pro.i_am_pro')
  })

  it('should return url pro fr', () => {
    const enzymeWrapper  = mountWithContext(<LinkPro countryCode='FR' />)

    expect(enzymeWrapper.find('a')).to.have.length(1)
    expect(enzymeWrapper.find('a')).to.have.attr('href', 'https://www.quotatispro.fr')
    expect(enzymeWrapper.find('a').text()).to.equal('pro.i_am_pro')
  })

  it('should return url pro es', () => {
    const enzymeWrapper  = mountWithContext(<LinkPro countryCode='ES' />)

    expect(enzymeWrapper.find('a')).to.have.length(1)
    expect(enzymeWrapper.find('a')).to.have.attr('href', 'https://www.quotatispro.es')
    expect(enzymeWrapper.find('a').text()).to.equal('pro.i_am_pro')
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
