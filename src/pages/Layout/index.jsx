import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Header from '../../containers/Header'

injectTapEventPlugin()

const Layout = (props) => {
  return (
    <MuiThemeProvider>
      <div>
        <Header />
        {props.children}
      </div>
    </MuiThemeProvider>
  )
}

Layout.propTypes = {
  children: React.PropTypes.object
}

export default Layout
