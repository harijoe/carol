import React from 'react'
import { shallow } from 'enzyme'

import FirmLight from './'

const props = {
  name: 'test',
  logoUrl: '',
  postalCode: '96352',
  globalRating: 4.5,
  globalRatingCount: 88,
}

it('renders the FirmLight component', () => {
  const wrapper = shallow(<FirmLight {...props} />)

  expect(wrapper).toMatchSnapshot()
})
