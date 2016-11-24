import chai from 'chai'
import rewire from 'rewire'
import { shallow } from 'enzyme'
import React from 'react'
import { fromJS } from 'immutable'

const expect = chai.expect
const MenuBurgerConnect = rewire("./")
const MenuBurger = MenuBurgerConnect.__get__('MenuBurger')

describe('<MenuBurger />', () => {
  it('should have <Menu country={country: fromJS({ countryCode: "GB"}) } /> with a list of 5 items', () => {
    const wrapper = shallow(<MenuBurger country={fromJS({ countryCode: 'GB'})} />)

    expect(wrapper.find('Connect(InjectIntl(Menu))')).to.have.length(1)
    expect(wrapper.find('Connect(InjectIntl(Menu)) ul li')).to.have.length(5)
    expect(wrapper.find('li').at(0).find('Link').find('FormattedMessage')).to.have.length(1)
    expect(wrapper.find('li').at(0).find('Link').find('FormattedMessage')).to.have.id('home')
    expect(wrapper.find('li').at(1).find('Link').find('FormattedMessage')).to.have.length(1)
    expect(wrapper.find('li').at(1).find('Link').find('FormattedMessage')).to.have.id('pro.find_pro')
    expect(wrapper.find('li').at(2).find('Link').find('FormattedMessage')).to.have.length(1)
    expect(wrapper.find('li').at(2).find('Link').find('FormattedMessage')).to.have.id('pro.resource')
    expect(wrapper.find('li').at(3).find('Link').find('FormattedMessage')).to.have.length(1)
    expect(wrapper.find('li').at(3).find('Link').find('FormattedMessage')).to.have.id('help')
    expect(wrapper.find('Connect(LinkPro)')).to.have.length(1)
  })
})
