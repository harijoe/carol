import chai from 'chai'
import rewire from 'rewire'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import React from 'react'
import { fromJS } from 'immutable'

const expect = chai.expect
const ProfileConnect = rewire("../../../containers/user/Profile")
const Profile = ProfileConnect.__get__('Profile')

describe('<Profile />', () => {
  sinon.spy(Profile.prototype, 'componentWillMount')
  const getProfile = sinon.spy()
  const updateProfile = sinon.spy()
  const enzymeWrapper  = shallow(<Profile getProfile={getProfile} updateProfile={updateProfile} auth={ fromJS({grantType: 'password'}) } user={fromJS({id: 'users/jhgd-xfdghh-5xfdg', phone: '0606060606', isLogged: true})} />)

  it('calls componentWillMount', () => {
    expect(Profile.prototype.componentWillMount.calledOnce).to.equal(true)
  })

  it('should call profile() when the Profile is mounted', () => {
    expect(getProfile.calledOnce).to.equal(true)
  })

  it('should have one form', () => {
    expect(enzymeWrapper.find('Form')).to.have.length(1)
  })

  it('should have two inputs', () => {
    expect(enzymeWrapper.find('Form InputPhone')).to.have.length(1)
  })

  it('should have one button', () => {
    expect(enzymeWrapper.find('Form Button')).to.have.length(1)
  })

  it('Phone input has the right attr', () => {
    const attr = enzymeWrapper.find('Form').find('InputPhone').get(0).props.attr

    expect(attr.className).to.be.equal('phone')
    expect(attr.placeholder).to.be.equal('Phone')
    expect(attr.id).to.be.equal('phone')
    expect(attr.name).to.be.equal('phone')
    expect(enzymeWrapper.find('Form').find('InputPhone').get(0).props.value).to.be.equal('0606060606')
  })

  it('email state should be equal to my@email.com', () => {
    expect(enzymeWrapper.state('phone')).to.be.equal('0606060606')
  })

  it('simulate change phone', () => {
    enzymeWrapper.find('Form').find('InputPhone').at(0).simulate('change', {target: { value: '0101010101', id: 'phone' }})
    expect(enzymeWrapper.state('phone')).to.be.equal('0101010101')
  })

  it('simulates click events', () => {
    enzymeWrapper.find('Form').simulate('submit')
    expect(updateProfile.calledOnce).to.equal(true)
  })
})
