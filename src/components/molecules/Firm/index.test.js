import React from 'react'
import { shallow } from 'enzyme'

import mockIntl from '../../../../test/intlMock'
import Firm from './'

const items = { name: 'test', city: 'Paris'}

it('renders the Firm component', () => {
  const wrapper = shallow(mockIntl(<Firm items={items} />))

  expect(wrapper).toMatchSnapshot()
})
