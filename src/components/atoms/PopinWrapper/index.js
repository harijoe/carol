import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { ifThen } from 'utils/style'

const OuterWrapper = styled.div`${({ show }) => css`
  ${ifThen(show, `
      height: 100vh;
    `, `
      height: 0;
    `)}
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  background-color: white;
  width: 100%;
  z-index: 50;
  transition: height .3s linear, padding-top .3s linear, padding-bottom .3s linear, border-top-width .3s linear, border-top-width .3s linear;
  overflow: hidden;
`}`

const InnerWrapper = styled.div`${() => css`
  padding: 15px;
  width: 100%;
  height: 100%;
`}`

const PopinWrapper = ({ children, show }) => (
  <OuterWrapper show={show}>
    <InnerWrapper>
      {children}
    </InnerWrapper>
  </OuterWrapper>
)


PopinWrapper.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.any,
}

export default PopinWrapper
