import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import { theme, breakpoint } from 'utils/style'

import ChatbotPopin from 'containers/ChatbotPopin'
import defaultTheme from 'theme/default'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: white;
  ${breakpoint('xl')`
    background: ${theme('colors.grayscale.lighter')};
  `};
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

const Background = styled.div`
  ${breakpoint('xl')`
    background: white;
    width: 1200px;
    margin: auto;
  `};
`

const ProjectElaborationTemplate = ({ header, children, ...props }) =>
  <ThemeProvider theme={defaultTheme}>
    <Wrapper {...props}>
      <ChatbotPopin />
      <Header {...props}>
        {header}
      </Header>
      <Background>
        {children}
      </Background>
    </Wrapper>
  </ThemeProvider>

ProjectElaborationTemplate.propTypes = {
  header: PropTypes.any.isRequired,
  children: PropTypes.any.isRequired,
}

export default ProjectElaborationTemplate
