import chai from 'chai'
import rewire from 'rewire'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import React from 'react'

const expect = chai.expect
const MenuLoginConnect = rewire("../../../components/MenuLogin")
const MenuLogin = MenuLoginConnect.__get__('MenuLogin')

let handleTouchTap
let handleRequestClose

describe('<MenuLogin />', () => {
  beforeEach(() => {
    handleTouchTap = sinon.spy(MenuLogin.prototype, 'handleTouchTap')
    handleRequestClose = sinon.spy(MenuLogin.prototype, 'handleRequestClose')
  })

  afterEach(() => {
    handleTouchTap.restore()
    handleRequestClose.restore()
  })

  it('clicking on login should be a popover', () => {
    const wrapper = shallow(<MenuLogin />)

    wrapper.find('RaisedButton').simulate('TouchTap', {preventDefault: () => {}})
    wrapper.find('Popover').simulate('RequestClose', {preventDefault: () => {}})

    expect(handleTouchTap.calledOnce).to.be.true
    expect(handleRequestClose.calledOnce).to.be.true
  })

  describe('user login', () => {
    it('should have <RaisedButton /> my account', () => {
      const wrapper = shallow(<MenuLogin user={{'@id': 'users/xdfgxdg-xfghxfgh-54xfcgh', username: 'my name', email: 'mon@email.com'}} />)

      expect(wrapper.find('RaisedButton')).to.have.length(1)
      wrapper.find('RaisedButton').simulate('TouchTap', {preventDefault: () => {}})
      expect(handleTouchTap.calledOnce).to.be.true
      wrapper.find('Popover').simulate('RequestClose', {preventDefault: () => {}})
      expect(handleRequestClose.calledOnce).to.be.true
    })
  })
})
