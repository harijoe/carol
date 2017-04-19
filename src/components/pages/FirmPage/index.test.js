import React from 'react'
import { shallow } from 'enzyme'
import FirmPage from './'

it('renders', () => {
  shallow(<FirmPage params={{ firmId: '1' }} />)
})
