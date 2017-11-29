import React from 'react'
import { FormattedMessage } from 'react-intl'
import { shallow, mount } from 'enzyme'
import { ThemeProvider } from 'styled-components'

import intlMock from 'mocks/intlMock'
import theme from 'theme/default'
import RenderDropZone from '.'
import messages from '../../mocks/translations'

const wrapperShallowed = (props = {}) =>
  shallow(
    intlMock(
      <ThemeProvider theme={theme}>
        <RenderDropZone input={{ name: 'test', onChange: () => {} }} meta={{ touched: false }} theme={theme} {...props} />
      </ThemeProvider>,
    ),
  )

const wrapperMounted = (props = {}) =>
  mount(
    intlMock(
      <ThemeProvider theme={theme}>
        <RenderDropZone theme={theme} input={{ name: 'test', onChange: () => {} }} meta={{ touched: false }} {...props} />
      </ThemeProvider>,
    ),
  )

test('render RenderDropzone withour error', () => {
  expect(wrapperShallowed()).toMatchSnapshot()
})

test('trigger an error', () => {
  expect(
    wrapperShallowed({
      meta: {
        touched: true,
        error: { id: messages.test, values: {} },
      },
    }),
  ).toMatchSnapshot()
  expect(
    wrapperMounted({
      meta: {
        touched: true,
        error: { id: messages.test, values: {} },
      },
    })
      .find(FormattedMessage)
      .at(2)
      .text(),
  ).toContain('user.choose_img')
})
