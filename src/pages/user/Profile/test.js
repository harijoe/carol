import chai from 'chai'
import rewire from 'rewire'
import sinon from 'sinon'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import { fromJS } from 'immutable'
import mountWithContext from '../../../utils/ContextEnzymeTestHelper'
import InputPhone from '../../../ui/form/input/Phone'
import InputRadio from '../../../ui/form/input/Radio'
import InputText from '../../../ui/form/input/Text'
import InputPostal from '../../../ui/form/input/Postal'
import InputFileImage from '../../../ui/form/input/File/Image'
import Button from '../../../ui/form/input/Button'
import Form from '../../../ui/form/Form'

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
    expect(enzymeWrapper.find(Form)).to.have.length(1)
  })

  it('should have one button', () => {
    expect(enzymeWrapper.find(Button)).to.have.length(1)
  })

  it('Image input has the right attr', () => {
    const elt = enzymeWrapper.find(InputFileImage)
    expect(elt).to.have.length(1)

    const attr = elt.get(0).props.attr

    expect(attr.className).to.be.equal('imageBase64')
    expect(attr.placeholder).to.be.equal('Photo')
    expect(attr.id).to.be.equal('imageBase64')
    expect(attr.name).to.be.equal('imageBase64')
  })

  it('Radio input for Mr has the right props', () => {
    const elt = enzymeWrapper.find(InputRadio)
    expect(elt).to.have.length(2)

    const props = elt.at(0).props()
    const attr = props.attr

    expect(attr.className).to.be.equal('gender')
    expect(attr.id).to.be.equal('gender1')
    expect(attr.name).to.be.equal('gender')
    expect(props.value).to.be.equal('Mr')
    expect(props.text).to.be.equal('user.mr')
    expect(props.checked).to.be.false
  })

  it('Radio input for Mrs has the right props', () => {
    const props = enzymeWrapper.find(InputRadio).at(1).props()
    const attr = props.attr

    expect(attr.className).to.be.equal('gender')
    expect(attr.id).to.be.equal('gender2')
    expect(attr.name).to.be.equal('gender')
    expect(props.value).to.be.equal('Mrs')
    expect(props.text).to.be.equal('user.mrs')
    expect(props.checked).to.be.false
  })

  it('Text input for firstName has the right props', () => {
    const elt = enzymeWrapper.find(InputText).at(0)
    const attr = elt.props().attr

    expect(attr.className).to.be.equal('firstName')
    expect(attr.id).to.be.equal('firstName')
    expect(attr.name).to.be.equal('firstName')
    expect(attr.placeholder).to.be.equal('user.first_name')
    expect(attr.required).to.equal('required')
  })

  it('Text input for lastName has the right props', () => {
    const elt = enzymeWrapper.find(InputText).at(1)
    const attr = elt.props().attr

    expect(attr.className).to.be.equal('lastName')
    expect(attr.id).to.be.equal('lastName')
    expect(attr.name).to.be.equal('lastName')
    expect(attr.placeholder).to.be.equal('user.last_name')
    expect(attr.required).to.equal('required')
  })

  it('Phone input for mobilePhone has the right props', () => {
    const elt = enzymeWrapper.find(InputPhone)
    expect(elt).to.have.length(2)

    const attr = elt.at(0).props().attr

    expect(attr.className).to.be.equal('mobilePhone')
    expect(attr.id).to.be.equal('mobilePhone')
    expect(attr.name).to.be.equal('mobilePhone')
    expect(attr.placeholder).to.be.equal('user.mobile_phone')
    expect(attr.required).to.equal('required')
  })

  it('Phone input for mobilePhone has the right props', () => {
    const attr = enzymeWrapper.find(InputPhone).at(1).props().attr

    expect(attr.className).to.be.equal('fixedPhone')
    expect(attr.id).to.be.equal('fixedPhone')
    expect(attr.name).to.be.equal('fixedPhone')
    expect(attr.placeholder).to.be.equal('user.fixed_phone')
  })

  it('Text input for address has the right props', () => {
    const elt = enzymeWrapper.find(InputText).at(2)
    const attr = elt.props().attr

    expect(attr.className).to.be.equal('address')
    expect(attr.id).to.be.equal('address')
    expect(attr.name).to.be.equal('address')
    expect(attr.placeholder).to.be.equal('user.address')
  })

  it('Text input for address has the right props', () => {
    const elt = enzymeWrapper.find(InputPostal)
    expect(elt).to.have.length(1)

    const attr = elt.at(0).props().attr

    expect(attr.className).to.be.equal('postalCode')
    expect(attr.id).to.be.equal('postalCode')
    expect(attr.name).to.be.equal('postalCode')
    expect(attr.placeholder).to.be.equal('user.zip_code')
    expect(attr.required).to.equal('required')
  })

  it('labels <FormattedMessage />', () => {
    const elt = enzymeWrapper.find(FormattedMessage)

    expect(enzymeWrapper.find('Form > div').at(2).find(FormattedMessage).at(0)).to.have.length(1)
    expect(enzymeWrapper.find('Form > div').at(2).find(FormattedMessage).at(0).prop('id')).to.equal('user.gender')

    expect(enzymeWrapper.find('Form > div').at(3).find(FormattedMessage).at(0)).to.have.length(1)
    expect(enzymeWrapper.find('Form > div').at(3).find(FormattedMessage).at(0).prop('id')).to.equal('user.first_name')

    expect(enzymeWrapper.find('Form > div').at(4).find(FormattedMessage).at(0)).to.have.length(1)
    expect(enzymeWrapper.find('Form > div').at(4).find(FormattedMessage).at(0).prop('id')).to.equal('user.last_name')

    expect(enzymeWrapper.find('Form > div').at(5).find(FormattedMessage).at(0)).to.have.length(1)
    expect(enzymeWrapper.find('Form > div').at(5).find(FormattedMessage).at(0).prop('id')).to.equal('user.mobile_phone')

    expect(enzymeWrapper.find('Form > div').at(6).find(FormattedMessage).at(0)).to.have.length(1)
    expect(enzymeWrapper.find('Form > div').at(6).find(FormattedMessage).at(0).prop('id')).to.equal('user.fixed_phone')

    expect(enzymeWrapper.find('Form > div').at(7).find(FormattedMessage).at(0)).to.have.length(1)
    expect(enzymeWrapper.find('Form > div').at(7).find(FormattedMessage).at(0).prop('id')).to.equal('user.address')

    expect(enzymeWrapper.find('Form > div').at(8).find(FormattedMessage).at(0)).to.have.length(1)
    expect(enzymeWrapper.find('Form > div').at(8).find(FormattedMessage).at(0).prop('id')).to.equal('user.postal_code')
  })

  it('simulates click events', () => {
    enzymeWrapper.find('Form').simulate('submit')
    expect(updateProfile.calledOnce).to.equal(true)
  })
})
