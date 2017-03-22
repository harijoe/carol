import React from 'react'
import { shallow } from 'enzyme'

import ThumbnailPoster from './'

it('renders the ThumbnailPoster component', () => {
  expect(shallow(<ThumbnailPoster title="Test" image="test.jpg" />)).toMatchSnapshot()
})
