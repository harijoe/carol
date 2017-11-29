import React from 'react'
import { shallow } from 'enzyme'

import AttachmentSummary from './'

const wrapper = (props = {}) => shallow(<AttachmentSummary {...props} />)

it('renders AttachmentSummary', () => {
  expect(wrapper).toMatchSnapshot()
})
