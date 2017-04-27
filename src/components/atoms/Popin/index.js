import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { CloseAllButton } from 'containers'
import { theme, ifThen, breakpoint, mapBreakpoints } from 'utils/style'

const OuterWrapper = styled.div`${({ show }) => css`
  ${ifThen(show, `
    height: 100vh;
    opacity: 1;
    z-index: 50;
  `, `
    height: 0;
    opacity: 0;
    z-index: -50;
  `)}
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 100%;
  background: white;
  transition: height 0.3s linear, padding-top 0.3s linear, padding-bottom 0.3s linear, border-top-width 0.3s linear, border-top-width 0.3s linear${ifThen(!show, ', opacity 0.1s linear 1s')};
  overflow: hidden;
  ${breakpoint('m')`
    background: none;
    height: 100vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: opacity 0.2s linear;
    ${ifThen(!show, 'pointer-events: none;', '')}
  `}
`}`

const InnerWrapper = styled.div`${({ show }) => css`
  position: relative;
  width: 100%;
  height: 100%;
  ${ifThen(show, '', 'left: 100%')};
  pointer-events: auto;
  ${mapBreakpoints(bp => css`
    padding: ${theme(`grid.gutterWidth.${bp}`, 'rem')};
  `)}
  ${breakpoint('m')`
    ${ifThen(show, 'top: 0;', 'top: -50px;')}
    max-width: 50rem;
    background-color: ${theme('colors.white')};
    opacity: 1;
    transition: top 0.2s linear;
    height: initial;
  `}
`}`

const Background = styled.div`
  ${breakpoint('m')`
    position: absolute
    height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
  `}
`

const Popin = ({ children, show, closeAll }) => (
  <OuterWrapper show={show}>
    <Background onClick={closeAll} />
    <InnerWrapper show={show}>
      <CloseAllButton />
      {children}
    </InnerWrapper>
  </OuterWrapper>
)


Popin.propTypes = {
  closeAll: PropTypes.func,
  show: PropTypes.bool,
  children: PropTypes.any,
}

export default Popin
