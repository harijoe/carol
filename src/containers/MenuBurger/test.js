import chai from 'chai'
import rewire from 'rewire'
import { shallow } from 'enzyme'
import React from 'react'
import { fromJS } from 'immutable'

const expect = chai.expect
const MenuBurgerConnect = rewire("./")
const MenuBurger = MenuBurgerConnect.__get__('MenuBurger')

describe('<MenuBurger />', () => {
  it('should have <Menu country={country: fromJS({ countryCode: "GB"}) } /> with a list of 4 items', () => {
    const wrapper = shallow(<MenuBurger country={fromJS({ countryCode: 'GB'})} />)

    expect(wrapper.find('Connect(Menu)')).to.have.length(1)
    expect(wrapper.find('Connect(Menu) ul li')).to.have.length(4)
  })
})
