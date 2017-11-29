import React from 'react'
import { shallow } from 'enzyme'
import mockIntl from 'mocks/intlMock'
import FooterAdvices from '.'

it('renders the FooterAdvices component', () => {
  const wrapper = shallow(mockIntl(<FooterAdvices />))

  expect(wrapper).toMatchSnapshot()
})
