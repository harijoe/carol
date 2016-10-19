import chai from 'chai'
import rewire from 'rewire'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import React from 'react'

const expect = chai.expect
const MenuBurgerConnect = rewire("../../../components/MenuBurger")
const MenuBurger = MenuBurgerConnect.__get__('MenuBurger')

let handleTouchTap
let handleRequestClose

describe('<MenuBurger />', () => {
  it('should have <Menu /> with a list of 4 items', () => {
    const wrapper = shallow(<MenuBurger />)

    expect(wrapper.find('Connect(Menu)')).to.have.length(1)
    expect(wrapper.find('Connect(Menu) ul li')).to.have.length(4)
  })
})
