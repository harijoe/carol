import React from 'react'
import { shallow } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import theme from 'theme/default'
import mockIntl from 'mocks/intlMock'

import ProjectPage from './'

it('renders ProjectPage', () => {
  expect(
    shallow(
      mockIntl(
        <ThemeProvider theme={theme}>
          <ProjectPage params={{ projectId: '1' }} />
        </ThemeProvider>,
      ),
    ),
  ).toMatchSnapshot()
})
