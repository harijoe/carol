import React from 'react'
import { shallow } from 'enzyme'

import RichTextContent from '.'

it('renders the RichTextContent component', () => {
  expect(shallow(<RichTextContent content={'Some text with a <a href="https://google.com">link</a>.'} />)).toMatchSnapshot()
})
