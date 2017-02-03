import React from 'react'
import { shallow } from 'enzyme'

import mockIntl from '../../../../test/intlMock'
import ProjectForm from './'

it('renders ProjectForm component', () => {
  const onClick = jest.fn()
  const wrapper = shallow(mockIntl(<ProjectForm onClick={onClick} />))

  expect(wrapper).toMatchSnapshot()
})
