import chai from 'chai'
import rewire from 'rewire'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import React from 'react'
import { fromJS } from 'immutable'

const expect = chai.expect
const ProfileConnect = rewire("./")
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
    expect(enzymeWrapper.find('Form InputPhone')).to.have.length(2)
  })

  it('should have two inputs', () => {
    expect(enzymeWrapper.find('Form InputText')).to.have.length(3)
  })

  it('should have two inputs', () => {
    expect(enzymeWrapper.find('Form InputRadio')).to.have.length(2)
  })

  it('should have two inputs', () => {
    expect(enzymeWrapper.find('Form InputPostal')).to.have.length(1)
  })

  it('should have one button', () => {
    expect(enzymeWrapper.find('Form Button')).to.have.length(1)
  })

  it('Radio input has the right attr', () => {
    const attr = enzymeWrapper.find('Form').find('InputRadio').get(0).props.attr

    expect(attr.className).to.be.equal('gender')
    expect(attr.placeholder).to.be.equal('Gender')
    expect(attr.id).to.be.equal('gender1')
    expect(attr.name).to.be.equal('gender')
  })

  it('Radio input has the right attr', () => {
    const attr = enzymeWrapper.find('Form').find('InputRadio').get(1).props.attr

    expect(attr.className).to.be.equal('gender')
    expect(attr.placeholder).to.be.equal('Gender')
    expect(attr.id).to.be.equal('gender2')
    expect(attr.name).to.be.equal('gender')
  })

  it('Text input has the right attr', () => {
    const attr = enzymeWrapper.find('Form').find('InputText').get(0).props.attr

    expect(attr.className).to.be.equal('firstName')
    expect(attr.placeholder).to.be.equal('First name')
    expect(attr.id).to.be.equal('firstName')
    expect(attr.name).to.be.equal('firstName')
  })

  it('Text input has the right attr', () => {
    const attr = enzymeWrapper.find('Form').find('InputText').get(1).props.attr

    expect(attr.className).to.be.equal('lastName')
    expect(attr.placeholder).to.be.equal('Last name')
    expect(attr.id).to.be.equal('lastName')
    expect(attr.name).to.be.equal('lastName')
  })

  it('Phone input has the right attr', () => {
    const attr = enzymeWrapper.find('Form').find('InputPhone').get(0).props.attr

    expect(attr.className).to.be.equal('mobilePhone')
    expect(attr.placeholder).to.be.equal('Mobile phone number')
    expect(attr.id).to.be.equal('mobilePhone')
    expect(attr.name).to.be.equal('mobilePhone')
  })

  it('Phone input has the right attr', () => {
    const attr = enzymeWrapper.find('Form').find('InputPhone').get(1).props.attr

    expect(attr.className).to.be.equal('fixedPhone')
    expect(attr.placeholder).to.be.equal('Fixed phone number')
    expect(attr.id).to.be.equal('fixedPhone')
    expect(attr.name).to.be.equal('fixedPhone')
  })

  it('Text input has the right attr', () => {
    const attr = enzymeWrapper.find('Form').find('InputText').get(2).props.attr

    expect(attr.className).to.be.equal('address')
    expect(attr.placeholder).to.be.equal('Address')
    expect(attr.id).to.be.equal('address')
    expect(attr.name).to.be.equal('address')
  })

  it('Postal input has the right attr', () => {
    const attr = enzymeWrapper.find('Form').find('InputPostal').get(0).props.attr

    expect(attr.className).to.be.equal('zipCode')
    expect(attr.placeholder).to.be.equal('Postal code')
    expect(attr.id).to.be.equal('zipCode')
    expect(attr.name).to.be.equal('zipCode')
  })

  it('simulates click events', () => {
    enzymeWrapper.find('Form').simulate('submit')
    expect(updateProfile.calledOnce).to.equal(true)
  })
})
