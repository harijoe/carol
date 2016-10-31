import chai from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import React from 'react'
import Form from './'

const expect = chai.expect


describe('Form', () => {
  const enzymeWrapper  = shallow(<Form />)

  it('should have one form', () => {
    expect(enzymeWrapper.find('form')).to.have.length(1)
  })

  it('simulates submit events', () => {
    const onSubmit = sinon.spy()
    const wrapper = shallow(
      <Form onSubmit={onSubmit} />
    )

    wrapper.find('form').simulate('submit', { preventDefault() {}})
    expect(onSubmit.calledOnce).to.equal(true);
  })
})
