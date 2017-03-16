import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { theme } from 'utils/style'

const Title = styled.h2`
  font-family: 'montserrat-light', sans-serif;
  position: relative;
  display: block;
  width: 100%;
  text-align: center;
  letter-spacing: 0.075rem;
  color: ${theme('colors.black')};
  font-size: ${theme('fonts.size.m')};
  margin-bottom: ${theme('spaces.m')};
  padding-bottom: ${theme('spaces.m')};

  &::before {
    position: absolute;
    bottom: 0;
    left: 50%;
    height: 0.1rem;
    width: 2.5rem;
    content: '';
    margin-left: -1.25rem;
    background: ${theme('colors.black')};
  }
`

const StyledSection = styled.section`
  padding-left: ${theme('spaces.m')};
  padding-right: ${theme('spaces.m')};
`

const Section = ({ children, title, ...props }) => (
  <StyledSection {...props}>
    {title != null && <Title>{title}</Title>}
    {children}
  </StyledSection>
)
Section.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
}

export default Section
