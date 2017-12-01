import React from 'react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import mockStore from 'mocks/storeMock'
import PageTemplate from '.'

const store = mockStore()

const wrapper = shallow(
  <Provider store={store}>
    <PageTemplate header="header" footer="footer">
      test
    </PageTemplate>
  </Provider>,
)

window.location.hostname = 'carol-co-uk.dev.quotatis.net'

it('renders PageTemplate', () => {
  expect(wrapper).toMatchSnapshot()
  expect(wrapper.find(PageTemplate)).toHaveLength(1)
})
