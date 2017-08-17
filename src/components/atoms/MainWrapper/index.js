import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme, breakpoint, ifThen } from 'utils/style'

const blockStyles = ({ resetState }) => css`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-top: 5.6rem;
  width: 100%;
  background: ${theme('colors.white')};

  ${breakpoint('xl')`
    max-width: ${theme('grid.container')}rem;
  `}

  ${ifThen(
    resetState,
    css`
    padding-top: 0;
    background: transparent;
  `,
  )}
`

const StyledMainWrapper = styled.div`${blockStyles};`

const MainWrapper = ({ resetState, children, ...props }) =>
  <StyledMainWrapper {...{ resetState }} {...props}>
    {children}
  </StyledMainWrapper>

MainWrapper.propTypes = {
  resetState: PropTypes.bool,
  children: PropTypes.any,
}

export default MainWrapper
