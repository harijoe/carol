import chai from 'chai'
import rewire from 'rewire'
import { shallow } from 'enzyme'
import React from 'react'
import { fromJS } from 'immutable'
import sinon from 'sinon'
import { push } from 'react-router-redux'
import { logout } from '../../services/auth/ducks'
import Menu from '../Menu'
import Login from '../../containers/user/Login'

const expect = chai.expect
const MenuLoginConnect = rewire("./")
const MenuLogin = MenuLoginConnect.__get__('MenuLogin')

describe('<MenuLogin />', () => {
  context('Non Logged HO', () => {
    it('should have <Menu /> with login form inside', () => {
      const wrapper = shallow(<MenuLogin auth={fromJS({ grantType: null })} />)

      expect(wrapper.find(Menu)).to.have.length(1)
      expect(wrapper.find(Menu).find(Login)).to.have.length(1)
    })
  })

  context('Logged HO', () => {
    it('should have <Menu /> with a list of 4 items', () => {
      const wrapper = shallow(<MenuLogin auth={fromJS({ grantType: 'password' })} />)

      expect(wrapper.find(Menu)).to.have.length(1)
      expect(wrapper.find('ul li')).to.have.length(4)
    })

    it('simulate logout', () => {
      const dispatch = sinon.spy()
      const logoutAndRedirect = sinon.spy(MenuLogin.prototype, 'logoutAndRedirect')
      const wrapper = shallow(<MenuLogin auth={fromJS({ grantType: 'password' })} dispatch={dispatch} />)

      wrapper.find('ul li').at(3).find('a').simulate('click', { preventDefault() {}})
      expect(logoutAndRedirect.calledOnce).to.be.true
      expect(dispatch.calledWith(logout())).to.be.true
      expect(dispatch.calledWith(push('/'))).to.be.true
    })
  })

  context('On login page', () => {
    it('it should not have <Menu />', () => {
      const wrapper = shallow(<MenuLogin location={{ pathname: '/login' }} auth={fromJS({ grantType: null })} />)

      expect(wrapper.find(Menu)).to.have.length(0)
    })
  })

  it('mapStateToProps', () => {
    const mapStateToProps = MenuLoginConnect.__get__('mapStateToProps')

    expect(mapStateToProps({ auth: 'test' })).to.eql({ auth: 'test' })
  })
})
