import React from 'react'
import styled from 'styled-components'

import { IconLink } from 'components'
import { PrimaryNavigation } from 'containers'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.grayscale[0]};
  padding: 1rem;

  & > :not(:first-child) {
    margin-left: 1rem;
  }
`

const StyledIconLink = styled(IconLink)`
  display: inline-block;
  transform-origin: center;
  color: ${props => props.theme.colors.primary[1]};

  &:hover {
    color: ${props => props.theme.colors.primary[2]};
    animation: ${props => props.theme.animations.rotate360} 5s linear infinite;
  }
`

const Header = props => (
  <Wrapper {...props}>
    <StyledIconLink to="/" icon="quotatis" size={100} />
    <PrimaryNavigation {...props} />
  </Wrapper>
)

export default Header
