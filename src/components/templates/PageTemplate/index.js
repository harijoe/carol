import React, { PropTypes } from 'react'
import styled from 'styled-components'
import NotificationsSystem from 'reapop'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import theme from 'reapop-theme-wybo'
import { addLocaleData } from 'react-intl'
import fr from 'react-intl/locale-data/fr'
import en from 'react-intl/locale-data/en'
import es from 'react-intl/locale-data/es'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { IntlProvider } from 'containers'

addLocaleData([...es, ...en, ...fr])

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3.75rem;
  min-height: 100vh;
  box-sizing: border-box;
`

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`

const Content = styled.section`
  width: 100%;
  box-sizing: border-box;
  margin: 2rem auto;
  max-width: 920px;
`

const Footer = styled.footer`
  margin-top: auto;
`

const notificationsDefaultValues = {
  status: 'info',
  position: 'tr',
  dismissible: true,
  dismissAfter: 5000,
  allowHTML: true,
  closeButton: false,
}

injectTapEventPlugin()

const PageTemplate = ({ header, children, footer, ...props }) => (
  <MuiThemeProvider>
    <IntlProvider>
      <Wrapper {...props}>
        <NotificationsSystem theme={theme} defaultValues={notificationsDefaultValues} />
        <Header {...props}>{header}</Header>
        <Content>{children}</Content>
        <Footer>{footer}</Footer>
      </Wrapper>
    </IntlProvider>
  </MuiThemeProvider>
)

PageTemplate.propTypes = {
  header: PropTypes.any.isRequired,
  children: PropTypes.any.isRequired,
  footer: PropTypes.any.isRequired,
}

export default PageTemplate
