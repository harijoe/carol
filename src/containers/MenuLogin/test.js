import chai from 'chai'
import rewire from 'rewire'
import { shallow } from 'enzyme'
import React from 'react'
import { fromJS } from 'immutable'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

const expect = chai.expect
const MenuLoginConnect = rewire("./")
const MenuLogin = MenuLoginConnect.__get__('MenuLogin')
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore);

describe('<MenuLogin />', () => {
  context('Non Logged HO', () => {
    it('should have <Menu /> with login form inside', () => {
      const wrapper = shallow(<MenuLogin auth={fromJS({ grantType: null })} />)

      expect(wrapper.find('Connect(Menu)')).to.have.length(1)
      expect(wrapper.find('Connect(Menu) Connect(Login)')).to.have.length(1)
    })
  })

  context('Logged HO', () => {
    it('should have <Menu /> with a list of 4 items', () => {
      const wrapper = shallow(<MenuLogin auth={fromJS({ grantType: 'password' })} />)

      expect(wrapper.find('Connect(Menu)')).to.have.length(1)
      expect(wrapper.find('Connect(Menu) ul li')).to.have.length(4)
    })
  })

  it('mapStateToProps', () => {
    const mapStateToProps = MenuLoginConnect.__get__('mapStateToProps')
    expect(mapStateToProps({ auth: 'test' })).to.eql({ auth: 'test' })
  })
})
