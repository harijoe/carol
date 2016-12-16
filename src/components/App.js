import React, { Component, PropTypes } from 'react'
import { injectGlobal } from 'styled-components'

injectGlobal`
  body {
    margin: 0;
  }
`

const App = props => (
  <div>{props.children}</div>
)

App.propTypes = {
  children: PropTypes.any,
}

export default App
