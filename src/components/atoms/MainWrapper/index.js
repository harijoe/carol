import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme, merge, breakpoint, ifThen } from 'utils/style'

const styles = ({ paddingTop }) => {
  let baseStyle

  switch (paddingTop) {
    case 'm':
      baseStyle = css`
        padding-top: calc(5.6rem + ${theme('grid.gutterWidth.l')}rem);

        ${breakpoint('m')`
          padding-top: calc(5.6rem + ${theme('grid.gutterWidth.xl')}rem);
        `}
      `
      break
    default:
      baseStyle = css`
        padding-top: 5.6rem;
      `
      break
  }

  const commonStyle = ({ resetState }) => css`
    position: relative;
    margin-left: auto;
    margin-right: auto;
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

  return merge(baseStyle, commonStyle)
}

const StyledMainWrapper = styled.div`${styles};`

const MainWrapper = ({ paddingTop, resetState, children, ...props }) =>
  <StyledMainWrapper {...{ paddingTop, resetState }} {...props}>
    {children}
  </StyledMainWrapper>

MainWrapper.propTypes = {
  paddingTop: PropTypes.string,
  resetState: PropTypes.bool,
  children: PropTypes.any,
}

export default MainWrapper
