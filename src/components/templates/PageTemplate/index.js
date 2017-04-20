import React, { PropTypes } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import NotificationsSystem from 'reapop'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import theme from 'reapop-theme-wybo'
import { addLocaleData } from 'react-intl'
import fr from 'react-intl/locale-data/fr'
import en from 'react-intl/locale-data/en'
import es from 'react-intl/locale-data/es'
import { injectGlobals } from 'utils/style'

import { PopinNavigation, PopinAccount, BurgerButton, QuotatisLogo } from 'containers'
import defaultTheme, { resets, scaffolding } from '../../themes/default'

injectGlobals([resets, scaffolding])

addLocaleData([...es, ...en, ...fr])

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: #eeeeee;
`

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 20;
`

const Content = styled.div`
  width: 100%;
  margin: 0;
`

const Footer = styled.footer`
  margin-top: auto;
  width: 100%;
`

const notificationsDefaultValues = {
  status: 'info',
  position: 'tr',
  dismissible: true,
  dismissAfter: 5000,
  allowHTML: true,
  closeButton: false,
}

const PageTemplate = ({ header, children, footer, ...props }) => (
  <MuiThemeProvider>
    <ThemeProvider theme={defaultTheme}>
      <Wrapper {...props}>
        <NotificationsSystem theme={theme} defaultValues={notificationsDefaultValues} />
        <PopinNavigation />
        <PopinAccount />
        <Header {...props}>{header}</Header>
        <QuotatisLogo />
        <BurgerButton />
        <Content>{children}</Content>
        <Footer>{footer}</Footer>
      </Wrapper>
    </ThemeProvider>
  </MuiThemeProvider>
)

PageTemplate.propTypes = {
  header: PropTypes.any.isRequired,
  children: PropTypes.any.isRequired,
  footer: PropTypes.any.isRequired,
}

export default PageTemplate
