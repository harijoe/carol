Object.defineProperty(window.location, 'hostname', {
  writable: true,
  value: 'carol-co-uk.dev.quotatis.net',
})

import React from 'react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import PageTemplate from './'
import mockStore from '../../../../test/storeMock'

const store = mockStore()

const wrapper = shallow(
  <Provider store={store}>
    <PageTemplate header="header" footer="footer">test</PageTemplate>
  </Provider>
)

it('renders PageTemplate', () => {
  expect(wrapper).toMatchSnapshot()
  expect(wrapper.find(PageTemplate)).toHaveLength(1)
})
