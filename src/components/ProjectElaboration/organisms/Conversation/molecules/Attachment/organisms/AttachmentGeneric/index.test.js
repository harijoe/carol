import React from 'react'
import { shallow } from 'enzyme'

import AttachmentGeneric from './'

const wrapper = (props = {}) => shallow(<AttachmentGeneric {...props} />)

it('renders AttachmentGeneric', () => {
  expect(wrapper).toMatchSnapshot()
})
