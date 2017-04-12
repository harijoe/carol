import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { ifThen } from 'utils/style'
import injectScroll from 'hoc/component/injectScroll'

import { IconLink } from 'components'
import { PrimaryNavigation } from 'containers'

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;

  & > :not(:first-child) {
    margin-left: 0;
  }
`

const backgroundStyles = ({ atTop }) => css`
  position: fixed;
  width: 100%;
  height: 20%;
  transition: background-color 200ms linear;
  transition: height 300ms linear, background-color 200ms linear;
  ${ifThen(!atTop, `
    background: white;
    height: 12%;
  `)};
`

const Background = styled.div`${backgroundStyles}`

const StyledIconLink = styled(IconLink)`
  padding-top: 0;
  margin: 0;
  position: fixed;
`

const Header = ({ atTop, ...props }) => (
  <Wrapper>
    <Background atTop={atTop} />
    <StyledIconLink
      to="/"
      icon={atTop ? 'quotatis-white' : 'quotatis'}
      size={480}
    />
    <PrimaryNavigation {...props} atTop={atTop} />
  </Wrapper>
)

Header.propTypes = {
  atTop: PropTypes.bool,
}

export default injectScroll(Header)
