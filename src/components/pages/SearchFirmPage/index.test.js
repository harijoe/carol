import React from 'react'
import { shallow } from 'enzyme'
import SearchFirmPage from './'

it('renders', () => {
  shallow(<SearchFirmPage location={{ query: { homeImprovementId: 'test', servedAreaCityCode: '123' } }} />)
})
