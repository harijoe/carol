import React from 'react'
import { shallow } from 'enzyme'
import mockIntl from 'mocks/intlMock'

import ThumbnailCard from './'

it('renders the ThumbnailCard component', () => {
  const wrapper = shallow(mockIntl(<ThumbnailCard link="Test link" title="Test" image="test.jpg" icon="icon" items={['item1', 'item2']} />))

  expect(wrapper).toMatchSnapshot()
})
