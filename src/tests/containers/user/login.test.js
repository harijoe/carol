import chai from 'chai'
import rewire from 'rewire'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import React from 'react'

const expect = chai.expect
var loginConnect = rewire("../../../containers/user/Login");
const Login = loginConnect.__get__('Login');

describe('Login', () => {
  const enzymeWrapper  = shallow(<Login />);

  it('should have two inputs', () => {
    expect(enzymeWrapper.find('Input')).to.have.length(2)
  })

  it('should have one button', () => {
    expect(enzymeWrapper.find('button')).to.have.length(1)
  })

  it('simulates click events', () => {
    const onClickLogin = sinon.spy();
    const wrapper = shallow(
      <Login login={onClickLogin} />
    );
    wrapper.find('button').simulate('click');
    expect(onClickLogin.calledOnce).to.equal(true);
  })
})
