import React from 'react'
import { shallow } from 'enzyme'
import mockIntl from 'mocks/intlMock'
import ProjectDetails from './'

const details = { id: '1', name: 'project1', trade: 'test' }
const wrap = (props = {}) => shallow(mockIntl(<ProjectDetails details={details} {...props} />))

it('renders ProjectDetails', () => {
  expect(wrap()).toMatchSnapshot()
})
