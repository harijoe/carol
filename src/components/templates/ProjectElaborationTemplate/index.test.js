Object.defineProperty(window.location, 'hostname', {
  writable: true,
  value: 'carol-co-uk.dev.quotatis.net',
})

import React from 'react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'

import ProjectElaborationTemplate from './'
import mockStore from '../../../../test/storeMock'

const store = mockStore()

const wrapper = shallow(
  <Provider store={store}>
    <ProjectElaborationTemplate header="header">test</ProjectElaborationTemplate>
  </Provider>
)

it('renders ProjectElaborationTemplate', () => {
  expect(wrapper).toMatchSnapshot()
})
