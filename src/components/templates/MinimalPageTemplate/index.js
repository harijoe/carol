import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { addLocaleData } from 'react-intl'
import fr from 'react-intl/locale-data/fr'
import en from 'react-intl/locale-data/en'
import es from 'react-intl/locale-data/es'
import { injectGlobals } from 'utils/style'

import defaultTheme, { resets, scaffolding } from '../../themes/default'

injectGlobals([resets, scaffolding])

addLocaleData([...es, ...en, ...fr])

const MinimalPageTemplate = ({ children }) =>
  <ThemeProvider theme={defaultTheme}>
    {children}
  </ThemeProvider>

MinimalPageTemplate.propTypes = {
  children: PropTypes.any.isRequired,
}

export default MinimalPageTemplate
