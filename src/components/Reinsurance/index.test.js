import React from 'react'
import { shallow } from 'enzyme'

import Reinsurance from './'

it('renders Reinsurance', () => {
  expect(shallow(<Reinsurance />)).toMatchSnapshot()
})
