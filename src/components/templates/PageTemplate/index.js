import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { IntlProvider, addLocaleData } from 'react-intl'
import NotificationsSystem from 'reapop'
// import 'font-awesome/css/font-awesome.min.css'
import theme from 'reapop-theme-wybo'
import fr from 'react-intl/locale-data/fr'
import en from 'react-intl/locale-data/en'
import es from 'react-intl/locale-data/es'
import { getCurrentMessages, getCurrentLanguage } from 'utils/locale'

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

const PageTemplate = ({ header, children, footer, ...props }) => (
  <IntlProvider
    locale={getCurrentLanguage()}
    messages={getCurrentMessages()}
  >
    <Wrapper {...props}>
      <NotificationsSystem theme={theme} />
      <Header>{header}</Header>
      <Content>{children}</Content>
      <Footer>{footer}</Footer>
    </Wrapper>
  </IntlProvider>
)

PageTemplate.propTypes = {
  header: PropTypes.any.isRequired,
  children: PropTypes.any.isRequired,
  footer: PropTypes.any.isRequired,
}

export default PageTemplate