import React from 'react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'

import mockStore from 'mocks/storeMock'
import ProjectElaborationTemplate from '.'

const store = mockStore()

const wrapper = shallow(
  <Provider store={store}>
    <ProjectElaborationTemplate header="header">test</ProjectElaborationTemplate>
  </Provider>,
)

window.location.hostname = 'carol-co-uk.dev.quotatis.net'

it('renders ProjectElaborationTemplate', () => {
  expect(wrapper).toMatchSnapshot()
})
