import chai from 'chai'
import rewire from 'rewire'
import React from 'react'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import { fromJS } from 'immutable'

const expect = chai.expect
const ProConnect = rewire('./')
const Pro = ProConnect.__get__('Pro')

chai.use(chaiEnzyme())

describe('Pro', () => {
  it('should return a pro', () => {
    const pro = fromJS({
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
      trade: 'Plomberie'
    })

    const enzymeWrapper  = shallow(<Pro pro={pro} />)

    expect(enzymeWrapper.find('ul > li').at(0).text()).to.have.be.equal('<FormattedMessage />: ')
    expect(enzymeWrapper.find('ul > li').at(1).text()).to.have.be.equal('<FormattedMessage />: Mcdo')
    expect(enzymeWrapper.find('ul > li').at(2).text()).to.have.be.equal('<FormattedMessage />: 59500')
    expect(enzymeWrapper.find('ul > li').at(3).text()).to.have.be.equal('<FormattedMessage />: DOUAI')
    expect(enzymeWrapper.find('ul > li').at(4).text()).to.have.be.equal('<FormattedMessage />: FR')
    expect(enzymeWrapper.find('ul > li').at(5).text()).to.have.be.equal('<FormattedMessage />: 51525408400046')
    expect(enzymeWrapper.find('ul > li').at(6).text()).to.have.be.equal('<FormattedMessage />: Desc.')
    expect(enzymeWrapper.find('ul > li').at(7).text()).to.have.be.equal('<FormattedMessage />: www.reseau-afl.fr')
    expect(enzymeWrapper.find('ul > li').at(8).text()).to.have.be.equal('<FormattedMessage />: <5')
    expect(enzymeWrapper.find('ul > li').at(9).text()).to.have.be.equal('<FormattedMessage />: 1997-03-01T13:48:56+00:00')
    expect(enzymeWrapper.find('ul > li').at(10).text()).to.have.be.equal('<FormattedMessage />: Plomberie')
  })
})
