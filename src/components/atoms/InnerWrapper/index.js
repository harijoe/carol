import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme, breakpoint } from 'utils/style'

const blockStyles = () => css`
  position: relative;
  padding-top: ${theme('grid.gutterWidth.l')}rem;
  width: 100%;

  ${breakpoint('l')`
    padding-top: ${theme('grid.gutterWidth.xl')}rem;
  `}
`

const StyledInnerWrapper = styled.div`${blockStyles}`

const InnerWrapper = ({ children, ...props }) => (
  <StyledInnerWrapper {...props}>
    {children}
  </StyledInnerWrapper>
)

InnerWrapper.propTypes = {
  children: PropTypes.any,
}

export default InnerWrapper
