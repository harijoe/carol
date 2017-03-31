import React from 'react'
import styled from 'styled-components'
import { theme } from 'utils/style'

import { IconLink } from 'components'
import { PrimaryNavigation, FullscreenNavigation } from 'containers'

const Wrapper = styled.div`
  display: flex;

  & > :not(:first-child) {
    margin-left: 0;
  }
`

const StyledIconLink = styled(IconLink)`
  padding-top: 0;
  margin: 0;
  color: ${theme('colors.primary')};
`

const Header = props => (
  <Wrapper {...props}>
    <FullscreenNavigation />
    <StyledIconLink
      to="/"
      icon="quotatis-white"
      size={480}
    />
    <PrimaryNavigation {...props} />
  </Wrapper>
)

export default Header
