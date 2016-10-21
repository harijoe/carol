import chai from 'chai'
import rewire from 'rewire'
import { shallow } from 'enzyme'
import React from 'react'
import { fromJS } from 'immutable'
import sinon from 'sinon'

const expect = chai.expect
const MenuLoginConnect = rewire("../../../components/MenuLogin")
const MenuLogin = MenuLoginConnect.__get__('MenuLogin')

describe('<MenuLogin />', () => {
  context('Non Logged HO', () => {
    it('should have <Menu /> with login form inside', () => {
      const wrapper = shallow(<MenuLogin user={fromJS({id: 'users/xdfgxdg-xfghxfgh-54xfcgh', phone: '+33606060606', isLogged: false})} />)

      expect(wrapper.find('Connect(Menu)')).to.have.length(1)
      expect(wrapper.find('Connect(Menu) Connect(Login)')).to.have.length(1)
    })
  })

  context('Logged HO', () => {
    it('should have <Menu /> with a list of 4 items', () => {
      const wrapper = shallow(<MenuLogin user={fromJS({id: 'users/xdfgxdg-xfghxfgh-54xfcgh', phone: '+33606060606', isLogged: true})} />)

      expect(wrapper.find('Connect(Menu)')).to.have.length(1)
      expect(wrapper.find('Connect(Menu) ul li')).to.have.length(4)
    })

    it('should logout', () => {
      const logoutAndRedirect = sinon.spy()
      const wrapper = shallow(<MenuLogin user={fromJS({id: 'users/xdfgxdg-xfghxfgh-54xfcgh', phone: '+33606060606', isLogged: true})} logoutAndRedirect={logoutAndRedirect} />)

      wrapper.find('Connect(Menu) ul li').at(3).find('a').simulate('click')
      expect(logoutAndRedirect.calledOnce).to.be.true
    })
  })
})
