import 'babel-polyfill'
import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from 'theme/default'

const req = require.context('components', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(story =>
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      {story()}
    </ThemeProvider>
  </BrowserRouter>,
)

configure(loadStories, module)
