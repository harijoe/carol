import React from 'react'
import { shallow } from 'enzyme'

import ProjectForm from './'
import { Link } from 'components'

const onClick = jest.fn()
const wrapper = shallow(<ProjectForm onClick={onClick} />)

it('renders an Link', () => {
  expect(wrapper).toMatchSnapshot()
  expect(wrapper.find(Link)).toHaveLength(1)
})
