import React from 'react'
import { shallow } from 'enzyme'
import mockIntl from 'mocks/intlMock'
import FooterSocialNetworks from '.'

it('renders the FooterSocialNetworks component', () => {
  const wrapper = shallow(mockIntl(<FooterSocialNetworks />))

  expect(wrapper).toMatchSnapshot()
})
