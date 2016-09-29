import chai from 'chai'
import rewire from 'rewire'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import React from 'react'

import jsdom from 'jsdom'
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc
global.window = doc.defaultView

const expect = chai.expect
const ProfileConnect = rewire("../../../containers/user/Profile")
const Profile = ProfileConnect.__get__('Profile')

describe('<Profile />', () => {
  sinon.spy(Profile.prototype, 'componentWillMount')
  const getProfile = sinon.spy()
  const updateProfile = sinon.spy()
  const enzymeWrapper  = shallow(<Profile getProfile={getProfile} updateProfile={updateProfile} auth={ {grantType: 'password'} } user={ {'@id': 'users/jhgd-xfdghh-5xfdg', email: 'my@email.com', username: 'my name'} } />)

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
    expect(enzymeWrapper.find('Form Input')).to.have.length(2)
  })

  it('should have one button', () => {
    expect(enzymeWrapper.find('Form Button')).to.have.length(1)
  })

  it('Username input has the right attr', () => {
    const attr = enzymeWrapper.find('Form').find('Input').get(0).props.attr

    expect(attr.className).to.be.equal('username')
    expect(attr.placeholder).to.be.equal('Username')
    expect(attr.id).to.be.equal('username')
    expect(attr.name).to.be.equal('username')
    expect(attr.type).to.be.equal('text')
    expect(enzymeWrapper.find('Form').find('Input').get(0).props.value).to.be.equal('my name')
  })

  it('Email input has the right attr', () => {
    const attr = enzymeWrapper.find('Form').find('Input').get(1).props.attr

    expect(attr.className).to.be.equal('email')
    expect(attr.placeholder).to.be.equal('Email')
    expect(attr.id).to.be.equal('email')
    expect(attr.name).to.be.equal('email')
    expect(attr.type).to.be.equal('email')
    expect(enzymeWrapper.find('Form').find('Input').get(1).props.value).to.be.equal('my@email.com')
  })

  it('email state should be equal to my@email.com', () => {
    expect(enzymeWrapper.state('email')).to.be.equal('my@email.com')
  })

  it('username state should be equal to my name', () => {
    expect(enzymeWrapper.state('username')).to.be.equal('my name')
  })

  it('simulate change username', () => {
    enzymeWrapper.find('Form').find('Input').at(0).simulate('change', {target: { value: 'test', id: 'username' }})
    expect(enzymeWrapper.state('username')).to.be.equal('test')
  })

  it('simulate change email', () => {
    enzymeWrapper.find('Form').find('Input').at(1).simulate('change', {target: { value: 'test@email.com', id: 'email' }})
    expect(enzymeWrapper.state('email')).to.be.equal('test@email.com')
  })

  it('simulates click events', () => {
    enzymeWrapper.find('Form').simulate('submit')
    expect(updateProfile.calledOnce).to.equal(true)
  })
})
