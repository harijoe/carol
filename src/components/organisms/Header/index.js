import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { ifThen } from 'utils/style'
import injectScroll from 'hoc/component/injectScroll'

import { PrimaryNavigation } from 'components'

const Wrapper = styled.div`
  width: 100%;
  display: flex;

  & > :not(:first-child) {
    margin-left: 0;
  }
`

const Background = styled.div`${({ atTop }) => css`
  width: 100%;
  height: 120px;
  transition: background-color 200ms linear;
  transition: height 300ms ease-in-out, background-color 300ms ease-in-out;
  ${ifThen(!atTop, `
    transition: height 200ms ease-in, background-color 200ms ease-out;
    background: white;
    height: 80px;
  `)};
`}`

const Header = ({ atTop, ...props }) => (
  <Wrapper>
    <Background atTop={atTop}>
      <PrimaryNavigation {...props} atTop={atTop} />
    </Background>
  </Wrapper>
)

Header.propTypes = {
  atTop: PropTypes.bool,
}

export default injectScroll(Header)
