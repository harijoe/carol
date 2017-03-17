import React from 'react'
import { shallow } from 'enzyme'

import mockIntl from '../../../../test/intlMock'
import Testimonial from './'

it('renders Testimonial', () => {
  expect(shallow(mockIntl(<Testimonial />))).toMatchSnapshot()
})
