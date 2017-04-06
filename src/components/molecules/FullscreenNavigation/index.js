import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'

import { merge } from 'utils/style'
import { BurgerMenu, CountryMenu } from 'containers'

/* @TODO Edit fullscreen navigation styles here */
const style = ({ show }) => {
  let showStyle = css`
    height: 0;
  `

  if (show === true) {
    showStyle = css`
      height: 100vh;
    `
  }

  const commonStyles = css`
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    background-color: white;
    height: 100vh;
    width: 100%;
    z-index: 99;
    transition: height .3s linear, padding-top .3s linear, padding-bottom .3s linear, border-top-width .3s linear, border-top-width .3s linear;
    overflow: hidden;
  `

  return merge(commonStyles, showStyle)
}

const Wrapper = styled.div`${style}`

const FullscreenNavigation = ({ show }) => (
  <Wrapper show={show}>
    <BurgerMenu />
    <CountryMenu />
  </Wrapper>
)

FullscreenNavigation.propTypes = {
  show: PropTypes.bool,
}

export default FullscreenNavigation
