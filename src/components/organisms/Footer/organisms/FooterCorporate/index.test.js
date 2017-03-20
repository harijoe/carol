import React from 'react'
import { shallow } from 'enzyme'
import FooterCorporate from '.'
import mockIntl from '../../../../../../test/intlMock'

it('renders the FooterCorporate component', () => {
  const wrapper = shallow(mockIntl(<FooterCorporate />))

  expect(wrapper).toMatchSnapshot()
})
