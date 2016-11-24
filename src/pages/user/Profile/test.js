import chai from 'chai'
import rewire from 'rewire'
import sinon from 'sinon'
import React from 'react'
import { fromJS } from 'immutable'
import mountWithContext from '../../../utils/ContextEnzymeTestHelper'
import InputPhone from '../../../ui/form/input/Phone'
import InputRadio from '../../../ui/form/input/Radio'
import InputText from '../../../ui/form/input/Text'
import InputPostal from '../../../ui/form/input/Postal'

const expect = chai.expect
const ProfileConnect = rewire("./")
const Profile = ProfileConnect.__get__('Profile')

describe('<Profile />', () => {
  sinon.spy(Profile.prototype, 'componentWillMount')
  const getProfile = sinon.spy()
  const updateProfile = sinon.spy()
  const enzymeWrapper  = mountWithContext(<Profile getProfile={getProfile} updateProfile={updateProfile} auth={ fromJS({grantType: 'password'}) } user={fromJS({id: 'users/jhgd-xfdghh-5xfdg', isLogged: true})} />)

  it('calls componentWillMount', () => {
    expect(Profile.prototype.componentWillMount.calledOnce).to.equal(true)
  })

  it('should call profile() when the Profile is mounted', () => {
    expect(getProfile.calledOnce).to.equal(true)
  })

  it('should have one form', () => {
    expect(enzymeWrapper.find('Form')).to.have.length(1)
  })

  it('should have one button', () => {
    expect(enzymeWrapper.find('Form Button')).to.have.length(1)
  })

  it('Radio input for Mr has the right props', () => {
    expect(enzymeWrapper.find('Form div.form-group').at(0).childAt(0).type()).to.equal(InputRadio)

    const props = enzymeWrapper.find('Form div.form-group').at(0).childAt(0).props()
    const attr = props.attr

    expect(attr.className).to.be.equal('gender')
    expect(attr.id).to.be.equal('gender1')
    expect(attr.name).to.be.equal('gender')
    expect(props.value).to.be.equal('Mr')
    expect(props.text).to.be.equal('user.mr')
    expect(props.checked).to.be.false
  })

  it('Radio input for Mrs has the right props', () => {
    expect(enzymeWrapper.find('Form div.form-group').at(0).childAt(1).type()).to.equal(InputRadio)

    const props = enzymeWrapper.find('Form div.form-group').at(0).childAt(1).props()
    const attr = props.attr

    expect(attr.className).to.be.equal('gender')
    expect(attr.id).to.be.equal('gender2')
    expect(attr.name).to.be.equal('gender')
    expect(props.value).to.be.equal('Mrs')
    expect(props.text).to.be.equal('user.mrs')
    expect(props.checked).to.be.false
  })

  it('Text input for firstName has the right props', () => {
    const elt = enzymeWrapper.find('Form div.form-group').at(1).childAt(0)
    expect(elt.type()).to.equal(InputText)

    const props = elt.props()
    const attr = props.attr

    expect(attr.className).to.be.equal('firstName')
    expect(attr.id).to.be.equal('firstName')
    expect(attr.name).to.be.equal('firstName')
    expect(attr.placeholder).to.be.equal('user.first_name')
    expect(attr.required).to.equal('required')
  })

  it('Text input for lastName has the right props', () => {
    const elt = enzymeWrapper.find('Form div.form-group').at(2).childAt(0)
    expect(elt.type()).to.equal(InputText)

    const props = elt.props()
    const attr = props.attr

    expect(attr.className).to.be.equal('lastName')
    expect(attr.id).to.be.equal('lastName')
    expect(attr.name).to.be.equal('lastName')
    expect(attr.placeholder).to.be.equal('user.last_name')
    expect(attr.required).to.equal('required')
  })

  it('Phone input for mobilePhone has the right props', () => {
    const elt = enzymeWrapper.find('Form div.form-group').at(3).childAt(0)
    expect(elt.type()).to.equal(InputPhone)

    const props = elt.props()
    const attr = props.attr

    expect(attr.className).to.be.equal('mobilePhone')
    expect(attr.id).to.be.equal('mobilePhone')
    expect(attr.name).to.be.equal('mobilePhone')
    expect(attr.placeholder).to.be.equal('user.mobile_phone')
    expect(attr.required).to.equal('required')
  })

  it('Phone input for mobilePhone has the right props', () => {
    const elt = enzymeWrapper.find('Form div.form-group').at(4).childAt(0)
    expect(elt.type()).to.equal(InputPhone)

    const props = elt.props()
    const attr = props.attr

    expect(attr.className).to.be.equal('fixedPhone')
    expect(attr.id).to.be.equal('fixedPhone')
    expect(attr.name).to.be.equal('fixedPhone')
    expect(attr.placeholder).to.be.equal('user.fixed_phone')
  })

  it('Text input for address has the right props', () => {
    const elt = enzymeWrapper.find('Form div.form-group').at(5).childAt(0)
    expect(elt.type()).to.equal(InputText)

    const props = elt.props()
    const attr = props.attr

    expect(attr.className).to.be.equal('address')
    expect(attr.id).to.be.equal('address')
    expect(attr.name).to.be.equal('address')
    expect(attr.placeholder).to.be.equal('user.address')
  })


  it('Text input for address has the right props', () => {
    const elt = enzymeWrapper.find('Form div.form-group').at(6).childAt(0)
    expect(elt.type()).to.equal(InputPostal)

    const props = elt.props()
    const attr = props.attr

    expect(attr.className).to.be.equal('zipCode')
    expect(attr.id).to.be.equal('zipCode')
    expect(attr.name).to.be.equal('zipCode')
    expect(attr.placeholder).to.be.equal('user.zip_code')
    expect(attr.required).to.equal('required')
  })


  it('simulates click events', () => {
    enzymeWrapper.find('Form').simulate('submit')
    expect(updateProfile.calledOnce).to.equal(true)
  })
})
