import React from 'react'
import { shallow } from 'enzyme'

import WordPressPostContent from './'

it('renders the WordPressPostContent component', () => {
  expect(shallow(<WordPressPostContent content={'Some text with a <a href="https://google.com">link</a>.'} />)).toMatchSnapshot()
})
