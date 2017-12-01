import React from 'react'
import { shallow, mount } from 'enzyme'
import { FormattedMessage } from 'react-intl'
import { ThemeProvider } from 'styled-components'
import intlMock from 'mocks/intlMock'
import messages from 'mocks/translations'
import theme from 'theme/default'
import Field from '.'

const wrapperShallowed = (props = {}) =>
  shallow(
    intlMock(
      <ThemeProvider theme={theme}>
        <Field name="name" {...props} />
      </ThemeProvider>,
    ),
  )
const wrapperMounted = (props = {}) =>
  mount(
    intlMock(
      <ThemeProvider theme={theme}>
        <Field name="name" theme={theme} {...props} />
      </ThemeProvider>,
    ),
  )

it('should renders Field component', () => {
  expect(wrapperShallowed()).toMatchSnapshot()
})

it('should renders label after input when type is radio', () => {
  expect(
    wrapperShallowed({
      invalid: true,
      error: { id: messages.test, values: {} },
    }),
  ).toMatchSnapshot()
  expect(
    wrapperMounted({
      invalid: true,
      error: { id: messages.test, values: {} },
    })
      .find(FormattedMessage)
      .text(),
  ).toContain(messages.test)
})
