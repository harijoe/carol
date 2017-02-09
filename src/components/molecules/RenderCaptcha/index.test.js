import React from 'react'
import { FormattedMessage } from 'react-intl'
import { shallow, mount } from 'enzyme'

import RenderCaptcha from '.'
import intlMock from '../../../../test/intlMock'
import messages from '../../../../test/translations'

const wrapperShallowed = (props = {}) => shallow(intlMock(<RenderCaptcha
  input={{ name: 'test', onChange: () => {} }}
  meta={{ touched: false }}
  {...props}
/>))

const wrapperMounted = (props = {}) => mount(intlMock(<RenderCaptcha
  input={{ name: 'test', onChange: () => {} }}
  meta={{ touched: false }}
  {...props}
/>))

test('render captcha withour error', () => {
  expect(wrapperShallowed()).toMatchSnapshot()
})

test('trigger an error', () => {
  expect(wrapperShallowed({
    meta: {
      touched: true,
      error: { id: messages.test, values: {}},
    }
  })).toMatchSnapshot()
  expect(wrapperMounted({
    meta: {
      touched: true,
      error: { id: messages.test, values: {}},
    }
  }).find(FormattedMessage).text()).toContain(messages.test)
})
