import React from 'react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'

import mockStore from 'mocks/storeMock'
import MinimalPageTemplate from '.'

const store = mockStore()

const wrapper = shallow(
  <Provider store={store}>
    <MinimalPageTemplate header="header">test</MinimalPageTemplate>
  </Provider>,
)

window.location.hostname = 'carol-co-uk.dev.quotatis.net'

it('renders MinimalPageTemplate', () => {
  expect(wrapper).toMatchSnapshot()
})
