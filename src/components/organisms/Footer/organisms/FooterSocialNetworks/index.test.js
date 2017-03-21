import React from 'react'
import { shallow } from 'enzyme'
import FooterSocialNetworks from '.'
import mockIntl from '../../../../../../test/intlMock'

it('renders the FooterSocialNetworks component', () => {
  const wrapper = shallow(mockIntl(<FooterSocialNetworks />))

  expect(wrapper).toMatchSnapshot()
})
