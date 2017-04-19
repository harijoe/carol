import React from 'react'
import { shallow } from 'enzyme'

import mockIntl from '../../../../test/intlMock'
import Testimonials from './'

it('renders Testimonials', () => {
  expect(shallow(mockIntl(<Testimonials />))).toMatchSnapshot()
})
