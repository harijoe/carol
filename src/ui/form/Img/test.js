import chai from 'chai'
import React from 'react'
import { mount } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import chaiJsonEqual from 'chai-json-equal'
import Img from './'

const expect = chai.expect
chai.use(chaiEnzyme())
chai.use(chaiJsonEqual)

describe('Img', () => {
  const enzymeWrapper  = mount(<Img id="image_id" className='image_class_name' name='image_name' height='image_height' width='image_width' alt='image_alt' role='test_role' src="http://photo" />)

  it('should have an img', () => {
    expect(enzymeWrapper.find('img')).to.have.length(1)
    expect(enzymeWrapper.find('img').prop('src')).to.equal('http://photo')
    expect(enzymeWrapper.find('img').prop('role')).to.equal('test_role')
    expect(enzymeWrapper.find('img').prop('id')).to.equal('image_id')
    expect(enzymeWrapper.find('img').prop('name')).to.equal('image_name')
    expect(enzymeWrapper.find('img').prop('className')).to.equal('image_class_name')
    expect(enzymeWrapper.find('img').prop('height')).to.equal('image_height')
    expect(enzymeWrapper.find('img').prop('width')).to.equal('image_width')
    expect(enzymeWrapper.find('img').prop('alt')).to.equal('image_alt')
  })
})
