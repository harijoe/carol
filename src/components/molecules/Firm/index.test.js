import React from 'react'
import { shallow } from 'enzyme'

import mockIntl from '../../../../test/intlMock'
import Firm from './'

test('Firm should be rendered', () => {
  const wrapper = shallow(mockIntl(<Firm items={{ name: 'test', trade: 'test', city: 'Paris'}} />))

  expect(wrapper).toHaveLength(1)
})
