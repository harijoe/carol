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
  beforeEach(() => {
    handleTouchTap = sinon.spy(MenuBurger.prototype, 'handleTouchTap')
    handleRequestClose = sinon.spy(MenuBurger.prototype, 'handleRequestClose')
  })

  afterEach(() => {
    handleTouchTap.restore()
    handleRequestClose.restore()
  })

  it('clicking on burger should be a popover', () => {
    const wrapper = shallow(<MenuBurger />)

    wrapper.find('RaisedButton').simulate('TouchTap', {preventDefault: () => {}})
    wrapper.find('Popover').simulate('RequestClose', {preventDefault: () => {}})

    expect(handleTouchTap.calledOnce).to.be.true
    expect(handleRequestClose.calledOnce).to.be.true
  })
})
