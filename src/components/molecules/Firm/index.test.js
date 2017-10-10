import React from 'react'
import { shallow } from 'enzyme'

import Firm from './'

const props = {
  name: 'test',
  logoUrl: '',
  postalCode: '96352',
  globalRating: 4.5,
  globalRatingCount: 88,
}

it('renders the Firm component', () => {
  const wrapper = shallow(<Firm {...props} />)

  expect(wrapper).toMatchSnapshot()
})
