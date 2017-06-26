import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css, ThemeProvider } from 'styled-components'
import { addLocaleData } from 'react-intl'
import fr from 'react-intl/locale-data/fr'
import en from 'react-intl/locale-data/en'
import es from 'react-intl/locale-data/es'
import { injectGlobals, ifThen } from 'utils/style'

import { CookiesBanner } from 'components'
import defaultTheme, { resets, scaffolding } from '../../themes/default'

injectGlobals([resets, scaffolding])

addLocaleData([...es, ...en, ...fr])

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: #eee;
`

const Header = styled.div`${({ loaded }) => css`
  ${ifThen(loaded, 'position: fixed', 'position: absolute')};
  left: 0;
  top: 0;
  width: 100%;
  z-index: 20;
`}`

const Content = styled.div`
  width: 100%;
  margin: 0;
`

const Footer = styled.footer`
  margin-top: auto;
  width: 100%;
`

class PageTemplate extends Component {
  static propTypes = {
    header: PropTypes.any.isRequired,
    children: PropTypes.any.isRequired,
    footer: PropTypes.any.isRequired,
    ssr: PropTypes.bool,
  }

  state = {
    loaded: false,
  }

  /*
   This sets loaded to true once the component is mounted and ssr is set to false
   This allows a smoother header apparition, transitioning from absolute positioning to fixed once the js
   is loaded and thus atTop is taken correctly into account
   (Try to disable it if you want to witness the ugly header this mechanism fixes)
   */
  componentWillMount() {
    if (this.props.ssr === false) {
      this.setState({ loaded: true })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.ssr === false) {
      this.setState({ loaded: true })
    }
  }

  render() {
    const { header, children, footer, ssr, ...props } = this.props
    const { loaded } = this.state

    /*
      The package reapop-theme-wybo triggers an error on webpack compilation, from webpack v3.0.0, on server-side.
      This bit requires explicitely the reapop-theme-wybo on client side, as it is not useful to include it during
      server side rendering.
    */
    let notificationsSystem

    if (!ssr) {
      const theme = require('reapop-theme-wybo')
      const NotificationsSystem = require('reapop').default

      notificationsSystem = <NotificationsSystem theme={theme} />
    }

    return (
      <ThemeProvider theme={defaultTheme}>
        <Wrapper {...props}>
          {notificationsSystem}
          {
            /*
              Motion menu disabled for V1
              !ssr && <MotionMenu />
            */
          }
          <CookiesBanner />
          <Header {...{ ...props, loaded }}>{header}</Header>
          <Content>{children}</Content>
          <Footer>{footer}</Footer>
        </Wrapper>
      </ThemeProvider>
    )
  }
}

export default PageTemplate
