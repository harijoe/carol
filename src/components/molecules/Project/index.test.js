import React from 'react'
import { shallow } from 'enzyme'

import mockIntl from '../../../../test/intlMock'
import Project from './'

const items = {
  name: 'test',
  createdAt: '2017-02-01',
  updatedAt: '2017-02-01',
  reference: 'test',
}

it('renders the Project component', () => {
  const wrapper = shallow(mockIntl(<Project items={items} />))

  expect(wrapper).toMatchSnapshot()
})
