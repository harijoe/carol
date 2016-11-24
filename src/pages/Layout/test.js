import chai from 'chai'
import rewire from 'rewire'
import { shallow } from 'enzyme'
import React from 'react'
import { fromJS } from 'immutable'

const expect = chai.expect
const LayoutConnect = rewire("./")
const Layout = LayoutConnect.__get__('Layout')
let wrapper

describe('<Header />', () => {
  beforeEach(() => {
    wrapper = shallow(<Layout country={fromJS({ countryCode: 'GB' })} />)
  })

  it('should have one header', () => {
    expect(wrapper.find('header')).to.have.length(1)
  })

  it('should have 6 li', () => {
    const wrapperLi = wrapper.find('header').find('ul li')

    expect(wrapperLi).to.have.length(5)
    expect(wrapperLi.at(0).find('MenuBurger')).to.have.length(1)
    expect(wrapperLi.at(1).find('Link').find('FormattedMessage')).to.have.length(1)
    expect(wrapperLi.at(1).find('Link').find('FormattedMessage')).to.have.id('home')
    expect(wrapperLi.at(2).find('Link').find('FormattedMessage')).to.have.length(1)
    expect(wrapperLi.at(2).find('Link').find('FormattedMessage')).to.have.id('pro.site_search')
    expect(wrapperLi.at(3).find('Connect(MenuLogin)')).to.have.length(1)
    expect(wrapperLi.at(4).find('Connect(Country)')).to.have.length(1)
  })
})
