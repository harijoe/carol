import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import { addLocaleData } from 'react-intl'
import fr from 'react-intl/locale-data/fr'
import en from 'react-intl/locale-data/en'
import es from 'react-intl/locale-data/es'
import { injectGlobals, theme } from 'utils/style'

import { MotionMenu } from 'components'
import defaultTheme, { resets, scaffolding } from '../../themes/default'

injectGlobals([resets, scaffolding])

addLocaleData([...es, ...en, ...fr])

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Header = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 3;
  background: ${theme('colors.white')};
  box-shadow: 0.1rem 0.1rem 0.3rem 0 rgba(0, 0, 0, 0.1);
`

const Content = styled.div`
  background: ${theme('colors.grayscale.lightest')};
`

const ProjectElaborationTemplate = ({ header, children, ...props }) => (
  <ThemeProvider theme={defaultTheme}>
    <Wrapper {...props}>
      <MotionMenu />
      <Header {...props}>{header}</Header>
      <Content>{children}</Content>
    </Wrapper>
  </ThemeProvider>
)

ProjectElaborationTemplate.propTypes = {
  header: PropTypes.any.isRequired,
  children: PropTypes.any.isRequired,
}

export default ProjectElaborationTemplate
