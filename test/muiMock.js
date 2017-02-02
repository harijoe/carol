import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const mockMui = node => (
  <MuiThemeProvider>{node}</MuiThemeProvider>
)

export default mockMui
