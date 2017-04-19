import React from 'react'
import { FormattedMessage } from 'react-intl'
import { shallow, mount } from 'enzyme'

import RenderDropZone from '.'
import intlMock from '../../../../test/intlMock'
import messages from '../../../../test/translations'

const wrapperShallowed = (props = {}) => shallow(intlMock(<RenderDropZone
  input={{ name: 'test', onChange: () => {} }}
  meta={{ touched: false }}
  {...props}
/>))

const wrapperMounted = (props = {}) => mount(intlMock(<RenderDropZone
  input={{ name: 'test', onChange: () => {} }}
  meta={{ touched: false }}
  {...props}
/>))

test('render RenderDropzone withour error', () => {
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
  }).find(FormattedMessage).at(2).text()).toContain(messages.test)
})
