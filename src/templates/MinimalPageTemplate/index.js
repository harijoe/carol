import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import defaultTheme from 'theme/default'

const MinimalPageTemplate = ({ children }) =>
  <ThemeProvider theme={defaultTheme}>
    {children}
  </ThemeProvider>

MinimalPageTemplate.propTypes = {
  children: PropTypes.any.isRequired,
}

export default MinimalPageTemplate
