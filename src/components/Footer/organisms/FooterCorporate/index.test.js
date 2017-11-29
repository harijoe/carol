import React from 'react'
import { shallow } from 'enzyme'
import mockIntl from 'mocks/intlMock'
import FooterCorporate from '.'

it('renders the FooterCorporate component', () => {
  const wrapper = shallow(mockIntl(<FooterCorporate />))

  expect(wrapper).toMatchSnapshot()
})
