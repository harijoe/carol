import React from 'react'
import { shallow, mount } from 'enzyme'
import { FormattedMessage } from 'react-intl'

import Field from '.'
import messages from '../../../../../../test/translations'
import intlMock from '../../../../../../test/intlMock'

const wrapperShallowed = (props = {}) => shallow(intlMock(<Field name="name" {...props} />))
const wrapperMounted = (props = {}) => mount(intlMock(<Field name="name" {...props} />))

it('should renders Field component', () => {
  expect(wrapperShallowed()).toMatchSnapshot()
})

it('should renders label after input when type is radio', () => {
  expect(wrapperShallowed({
    invalid: true,
    error: { id: messages.test, values: {}},
  })).toMatchSnapshot()
  expect(wrapperMounted({
    invalid: true,
    error: { id: messages.test, values: {}},
  }).find(FormattedMessage).text()).toContain(messages.test)
})
