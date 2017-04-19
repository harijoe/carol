import React from 'react'
import { Provider } from 'react-redux'
import { reduxForm } from 'redux-form'
import { shallow } from 'enzyme'

import { messages } from '../../../translations/en'
import mockStore from '../../../../test/storeMock'
import mockIntl from '../../../../test/intlMock'
import FirmSearchForm from './'

const handleSubmit = jest.fn()
const store = mockStore()
const Decorated = reduxForm({ form: 'testForm' })(FirmSearchForm)
const ComponentWithIntl = mockIntl(<Decorated handleSubmit={handleSubmit} submitting={false} />)
const wrap = (props = {}) => shallow(<Provider store={store}><ComponentWithIntl /></Provider>)

it('render FirmSearchForm', () => {
  const wrapper = wrap()

  expect(wrapper).toHaveLength(1)
})
