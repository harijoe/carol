import chai from 'chai'
import rewire from 'rewire'
import { shallow } from 'enzyme'
import React from 'react'
import { fromJS } from 'immutable'

const expect = chai.expect
const HeaderConnect = rewire("./")
const Header = HeaderConnect.__get__('Header')
const mapStateToProps = HeaderConnect.__get__('mapStateToProps')
let wrapper

describe('<Header />', () => {
  beforeEach(() => {
    wrapper = shallow(<Header country={fromJS({ countryCode: 'GB' })} />)
  })

  it('mapStateToProps()', () => {
    expect(mapStateToProps({user: 'test', country: 'country'})).to.jsonEqual({user: 'test'})
  })

  it('should have one header', () => {
    expect(wrapper.find('header')).to.have.length(1)
  })

  it('should have 7 li', () => {
    const wrapperLi = wrapper.find('header').find('ul li')

    expect(wrapperLi).to.have.length(6)
    expect(wrapperLi.at(0).find('MenuBurger')).to.have.length(1)
    expect(wrapperLi.at(1).find('Link').prop('children')).to.be.equal('Home')
    expect(wrapperLi.at(2).find('Link').prop('children')).to.be.equal('Site search')
    expect(wrapperLi.at(3).find('Link').prop('children')).to.be.equal('Help')
    expect(wrapperLi.at(4).find('Connect(MenuLogin)')).to.have.length(1)
    expect(wrapperLi.at(5).find('Connect(Country)')).to.have.length(1)
  })
})
