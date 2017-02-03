import React from 'react'
import { shallow } from 'enzyme'
import FirmListPage from './'

it('renders FirmListPage component', () => {
  shallow(<FirmListPage location={{ query: { trade: 'test', workingCityCode: '123' } }} />)
})
