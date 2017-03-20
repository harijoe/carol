import React from 'react'
import { shallow } from 'enzyme'
import FooterAdvices from '.'
import mockIntl from '../../../../../../test/intlMock'

it('renders the FooterAdvices component', () => {
  const wrapper = shallow(mockIntl(<FooterAdvices />))

  expect(wrapper).toMatchSnapshot()
})
