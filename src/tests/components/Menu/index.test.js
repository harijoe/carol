import chai from 'chai'
import rewire from 'rewire'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import React from 'react'
import { fromJS } from 'immutable'

const expect = chai.expect
const MenuConnect = rewire("../../../components/Menu")
const Menu = MenuConnect.__get__('Menu')

let handleTouchTap
let handleRequestClose

describe('<Menu />', () => {
  beforeEach(() => {
    handleTouchTap = sinon.spy(Menu.prototype, 'handleTouchTap')
    handleRequestClose = sinon.spy(Menu.prototype, 'handleRequestClose')
  })

  afterEach(() => {
    handleTouchTap.restore()
    handleRequestClose.restore()
  })

  it('calls componentWillReceiveProps', () => {
    const receiveProps = sinon.spy(Menu.prototype, 'componentWillReceiveProps')
    const wrapper = shallow(<Menu />)

    expect(receiveProps.calledOnce).to.be.false
    wrapper.setProps({
      routing: {
        locationBeforeTransitions: {
          key: '42esd'
        }
      }
    })
    expect(receiveProps.calledOnce).to.be.true
  })

  it('clicking on login should be a popover', () => {
    const wrapper = shallow(<Menu />)

    wrapper.find('RaisedButton').simulate('TouchTap', {preventDefault: () => {}})
    wrapper.find('Popover').simulate('RequestClose', {preventDefault: () => {}})

    expect(handleTouchTap.calledOnce).to.be.true
    expect(handleRequestClose.calledOnce).to.be.true
  })

  describe('user login', () => {
    it('should have <RaisedButton /> my account', () => {
      const wrapper = shallow(<Menu />)

      expect(wrapper.find('RaisedButton')).to.have.length(1)
      wrapper.find('RaisedButton').simulate('TouchTap', {preventDefault: () => {}})
      expect(handleTouchTap.calledOnce).to.be.true
      wrapper.find('Popover').simulate('RequestClose', {preventDefault: () => {}})
      expect(handleRequestClose.calledOnce).to.be.true
    })
  })
})
