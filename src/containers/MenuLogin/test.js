import chai from 'chai'
import rewire from 'rewire'
import { shallow } from 'enzyme'
import React from 'react'
import { fromJS } from 'immutable'
import sinon from 'sinon'
import { push } from 'react-router-redux'
import { logout } from '../../services/auth/ducks'

const expect = chai.expect
const MenuLoginConnect = rewire("./")
const MenuLogin = MenuLoginConnect.__get__('MenuLogin')

describe('<MenuLogin />', () => {
  context('Non Logged HO', () => {
    it('should have <Menu /> with login form inside', () => {
      const wrapper = shallow(<MenuLogin auth={fromJS({ grantType: null })} />)

      expect(wrapper.find('Connect(InjectIntl(Menu))')).to.have.length(1)
      expect(wrapper.find('Connect(InjectIntl(Menu)) Connect(Login)')).to.have.length(1)
    })
  })

  context('Logged HO', () => {
    it('should have <Menu /> with a list of 4 items', () => {
      const wrapper = shallow(<MenuLogin auth={fromJS({ grantType: 'password' })} />)

      expect(wrapper.find('Connect(InjectIntl(Menu))')).to.have.length(1)
      expect(wrapper.find('Connect(InjectIntl(Menu)) ul li')).to.have.length(4)
    })

    it('simulate logout', () => {
      const dispatch = sinon.spy()
      const logoutAndRedirect = sinon.spy(MenuLogin.prototype, 'logoutAndRedirect')
      const wrapper = shallow(<MenuLogin auth={fromJS({ grantType: 'password' })} dispatch={dispatch} />)

      wrapper.find('Connect(InjectIntl(Menu)) ul li').at(3).find('a').simulate('click', { preventDefault() {}})
      expect(logoutAndRedirect.calledOnce).to.be.true
      expect(dispatch.calledWith(logout())).to.be.true
      expect(dispatch.calledWith(push('/'))).to.be.true
    })
  })

  it('mapStateToProps', () => {
    const mapStateToProps = MenuLoginConnect.__get__('mapStateToProps')

    expect(mapStateToProps({ auth: 'test' })).to.eql({ auth: 'test' })
  })
})
