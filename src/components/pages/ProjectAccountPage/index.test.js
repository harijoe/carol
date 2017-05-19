import React from 'react'
import { shallow } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import theme from '../../themes/default'
import mockIntl from '../../../../test/intlMock'

import ProjectPage from './'

it('renders ProjectPage', () => {
    expect(shallow(mockIntl(<ThemeProvider theme={theme}><ProjectPage params={{ projectId: '1' }} /></ThemeProvider>))).toMatchSnapshot()
})
