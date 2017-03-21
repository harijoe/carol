import React from 'react'
import { shallow } from 'enzyme'

import ThumbnailCard from './'

it('renders the ThumbnailCard component', () => {
  const wrapper = shallow((<ThumbnailCard link="Test link" title="Test" image="Test image" icon="Test icon" items={['item1', 'item2']} />))

  expect(wrapper).toMatchSnapshot()
})
