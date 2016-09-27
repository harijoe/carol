import chai from 'chai'
import rewire from 'rewire'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import thunk from 'redux-thunk'
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
  const profile = sinon.spy()
  const enzymeWrapper  = shallow(<Profile profile={profile} />)

  it('calls componentWillMount', () => {
    expect(Profile.prototype.componentWillMount.calledOnce).to.equal(true)
  })

  it('should call profile() when the Profile is mounted', () => {
    expect(profile.calledOnce).to.equal(true)
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
})
