import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'

import { theme, ifThen, mapBreakpoints } from 'utils/style'

const titleStyles = ({ dark }) => css`
  ${ifThen(dark, css`
    color: ${theme('colors.white')};
    &::before {
      background: ${theme('colors.white')};
    }
  `, css`
    color: ${theme('colors.black')};
    &::before {
      background: ${theme('colors.black')};
    }
  `)}

  font-family: 'montserrat-light', sans-serif;
  position: relative;
  display: block;
  width: 100%;
  text-align: center;
  letter-spacing: 0.075rem;
  font-size: ${theme('fonts.size.m')};
  margin-top: 0;
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
  }
`

const Title = styled.h2`${titleStyles}`

const sectionStyles = ({ light, primary, dark }) => css`
  background: ${theme('colors.white')};
  ${mapBreakpoints(bp => css`
      padding: calc(${theme(`grid.padding.${bp}`, 'rem')} * 2) ${theme(`grid.padding.${bp}`, 'rem')}
  `)}
  ${ifThen(light, css`background: ${theme('colors.grayscale.lightest')};`)}
  ${ifThen(primary, css`background: ${theme('colors.primary')};`)}   
  ${ifThen(dark, css`background: ${theme('colors.black')};`)}

`

const StyledSection = styled.section`${sectionStyles}`

const Section = ({ light, primary, dark, children, title, ...props }) => (
  <StyledSection light={light} primary={primary} dark={dark} {...props}>
    {title != null && <Title light={light} primary={primary} dark={dark} {...props}>{title}</Title>}
    {children}
  </StyledSection>
)

Section.propTypes = {
  light: PropTypes.bool,
  primary: PropTypes.bool,
  dark: PropTypes.bool,
  children: PropTypes.any,
  title: PropTypes.string,
}

export default Section
