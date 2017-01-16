import React from 'react'
import { shallow } from 'enzyme'
import SearchFirmPage from './'

it('renders', () => {
  shallow(<SearchFirmPage location={{ query: { trade: 'test', workingCityCode: '123' } }} />)
})
