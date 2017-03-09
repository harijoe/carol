import React from 'react'
import styled from 'styled-components'

import { IconLink } from 'components'
import { PrimaryNavigation } from 'containers'
import { theme } from 'utils/style'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${theme('colors.grayscale.darker')};
  padding: 1rem;

  & > :not(:first-child) {
    margin-left: 1rem;
  }
`

const StyledIconLink = styled(IconLink)`
  display: inline-block;
  transform-origin: center;
  color: ${theme('colors.branding.primary')};
`

const Header = props => (
  <Wrapper {...props}>
    <StyledIconLink to="/" icon="quotatis" size={100} />
    <PrimaryNavigation {...props} />
  </Wrapper>
)

export default Header
