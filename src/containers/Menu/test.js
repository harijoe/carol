import chai from 'chai'
import rewire from 'rewire'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import React from 'react'
import { fromJS } from 'immutable'

const expect = chai.expect
const MenuConnect = rewire("./")
const Menu = MenuConnect.__get__('Menu')

let handleTouchTap
let handleRequestClose
let receiveProps
let wrapper

describe('<Menu />', () => {
  beforeEach(() => {
    handleTouchTap = sinon.spy(Menu.prototype, 'handleTouchTap')
    handleRequestClose = sinon.spy(Menu.prototype, 'handleRequestClose')
    receiveProps = sinon.spy(Menu.prototype, 'componentWillReceiveProps')
    wrapper = shallow(<Menu />)
  })

  afterEach(() => {
    handleTouchTap.restore()
    handleRequestClose.restore()
    receiveProps.restore()
  })

  context('Change page after changing page with PUSH action', () => {
    it('calls componentWillReceiveProps and handleRequestClose', () => {
      expect(receiveProps.calledOnce).to.be.false

      wrapper.setProps({
        routing: {
          locationBeforeTransitions: {
            key: '42esd',
            action: 'PUSH'
          }
        }
      })

      expect(receiveProps.calledOnce).to.be.true
      expect(handleRequestClose.calledOnce).to.be.true
    })
  })

  context('Change page after changing page with REPLACE action', () => {
    it('calls componentWillReceiveProps and handleRequestClose', () => {
      expect(receiveProps.calledOnce).to.be.false

      wrapper.setProps({
        routing: {
          locationBeforeTransitions: {
            key: '42esd',
            action: 'REPLACE'
          }
        }
      })

      expect(receiveProps.calledOnce).to.be.true
      expect(handleRequestClose.calledOnce).to.be.true
    })
  })

  context('Change page after changing page with OTHER action', () => {
    it('should not call handleRequestClose', () => {
      expect(receiveProps.calledOnce).to.be.false

      wrapper.setProps({
        routing: {
          locationBeforeTransitions: {
            key: '42esd',
            action: 'OTHER'
          }
        }
      })

      expect(receiveProps.calledOnce).to.be.true
      expect(handleRequestClose.calledOnce).to.be.false
    })
  })

  it('clicking on login should be a popover', () => {
    wrapper.find('RaisedButton').simulate('TouchTap', {preventDefault: () => {}})
    wrapper.find('Popover').simulate('RequestClose', {preventDefault: () => {}})

    expect(handleTouchTap.calledOnce).to.be.true
    expect(handleRequestClose.calledOnce).to.be.true
  })

  describe('user login', () => {
    it('should have <RaisedButton /> my account', () => {
      expect(wrapper.find('RaisedButton')).to.have.length(1)
      wrapper.find('RaisedButton').simulate('TouchTap', {preventDefault: () => {}})
      expect(handleTouchTap.calledOnce).to.be.true
      wrapper.find('Popover').simulate('RequestClose', {preventDefault: () => {}})
      expect(handleRequestClose.calledOnce).to.be.true
    })
  })
})
