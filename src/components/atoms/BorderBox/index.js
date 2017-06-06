import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { theme, ifThen, mapBreakpoints, breakpoint } from 'utils/style'

const titleStyles = ({ dark, grey, primary }) => css`
  ${ifThen(dark, css`color: ${theme('colors.black')};`)}
  ${ifThen(grey, css`color: ${theme('colors.grayscale.medium')};`)}
  ${ifThen(primary, css`color: ${theme('colors.primary')};`)}
  position: relative;
  display: block;
  margin-top: 0;
  margin-bottom: ${theme('spaces.l')};
  width: 100%;
  font-family: ${theme('fonts.family.montserratBold')};
  font-size: ${theme('fonts.size.s')};
  font-weight: normal;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.1rem;
`

const Title = styled.h3`${titleStyles}`

const blockStyles = ({ dark, grey, primary, mediumBorder, bigBorder }) => css`
  background: ${theme('colors.white')};
  border-width: 0.1rem;
  border-style: solid;

  ${mapBreakpoints(bp => css`
    margin-bottom: ${theme(`grid.gutterWidth.${bp}`, 'rem')};
    padding: ${theme(`grid.gutterWidth.${bp}`, 'rem')};
  `)}

  ${breakpoint('xl')`
    margin-bottom: ${theme('grid.gutterWidth.l')}rem;
    padding: ${theme('grid.gutterWidth.l')}rem;
  `}

  ${ifThen(dark, css`background: ${theme('colors.black')};`)}
  ${ifThen(primary, css`border-color: ${theme('colors.primary')};`)}   
  ${ifThen(grey, css`border-color: ${theme('colors.grayscale.light')};`)}
  ${ifThen(mediumBorder, css`border-width: 0.2rem;`)}
  ${ifThen(bigBorder, css`border-width: 0.3rem;`)}   
`

const Wrapper = styled.div`${blockStyles}`

const BorderBox = ({ primary, grey, dark, children, title, mediumBorder, bigBorder, ...props }) => (
  <Wrapper {...{ primary, grey, dark, mediumBorder, bigBorder }} {...props}>
    {title != null && <Title dark={dark} primary={primary} grey={grey}>{title}</Title>}
    {children}
  </Wrapper>
)

BorderBox.propTypes = {
  grey: PropTypes.bool,
  primary: PropTypes.bool,
  dark: PropTypes.bool,
  mediumBorder: PropTypes.bool,
  bigBorder: PropTypes.bool,
  children: PropTypes.any,
  title: PropTypes.string,
}

export default BorderBox
