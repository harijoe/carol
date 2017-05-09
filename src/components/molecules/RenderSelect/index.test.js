import React from 'react'
import { shallow } from 'enzyme'

import RenderSelect from './'

it('renders RenderSelect', () => {
  expect(shallow(<RenderSelect options={[{ value: null, id: null }]} />)).toMatchSnapshot()
})
