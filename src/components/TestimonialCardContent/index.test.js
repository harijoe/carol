import React from 'react'
import { shallow } from 'enzyme'
import mockIntl from 'mocks/intlMock'

import TestimonialCardContent from '.'

it('renders TestimonialCardContent', () => {
  expect(
    shallow(
      mockIntl(
        <TestimonialCardContent image="image.jpg" firstName="John" age="30" location="Paris" quote="Hi" link="http://www.google.fr" />,
      ),
    ),
  ).toMatchSnapshot()
})
