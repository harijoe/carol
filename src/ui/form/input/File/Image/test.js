import chai from 'chai'
import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'

const expect = chai.expect
const InputFileImage = './'

describe('InputFileImage', () => {
  const attr = {
    className: 'photo',
    id: 'photo',
    name: 'photo',
    placeholder: 'photo'
  }
  const handleChange = sinon.spy()
  const enzymeWrapper  = shallow(<InputFileImage attr={attr} onChange={handleChange} />)

  it('should have two inputs', () => {
    expect(enzymeWrapper.find('input')).to.have.html('<input type="text" class="photo" id="photo" name="photo" placeholder="photo"/>')
  })
  it('should call onChange once', () => {
    enzymeWrapper.simulate('change')
    expect(handleChange.calledOnce).to.equal(true)
  })
})
