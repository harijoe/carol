import React from 'react'
import { shallow } from 'enzyme'

import mockIntl from '../../../../test/intlMock'
import ProjectList from './'

const list = [{ id: 1, name: 'project 1' }, { id: 2, name: 'project 2' }, { id: 3, name: 'project 3' }]

it('renders the ProjectList component', () => {
  const wrapper = shallow(mockIntl(<ProjectList list={list} />))

  expect(wrapper).toMatchSnapshot()
})
