import React from 'react'
import styled from 'styled-components'

import { FooterAdvices, FooterCorporate, FooterSocialNetworks } from 'components'
import { theme } from 'utils/style'

const StyledFooter = styled.div`
  position: relative;
  width: 100vw;
  background-color: ${theme('colors.black')};
`

const Footer = () => (
  <StyledFooter>
    <FooterAdvices />
    <FooterCorporate />
    <FooterSocialNetworks />
  </StyledFooter>
)

export default Footer
